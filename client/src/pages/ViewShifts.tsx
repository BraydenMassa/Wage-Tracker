import axios from 'axios'
import { useState, useEffect } from 'react'
import { Shift } from '../types/ShiftType'
import ShiftView from '../components/ShiftView'
import '../styles/ViewShifts.css'
import BackArrow from '../components/BackArrow'

const ViewShifts = () => {
  const [shifts, setShifts] = useState<Shift[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleDeleteShift = (id: string) => {
    setShifts(shifts.filter((shift) => shift._id != id))
  }

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const res = await axios.get('http://localhost:4000/shifts')
        setShifts(res.data)
      } catch (err) {
        setError(`Error fetching shifts: ${err}`)
      } finally {
        setLoading(false)
      }
    }
    fetchShifts()
  }, [])

  if (loading) return <div>Loading shifts...</div>
  if (error) return <div>{error}</div>
  console.log(shifts)
  return (
    <div id='view-shifts-container'>
      <BackArrow id='view-back-arrow' />
      {shifts.length === 0 && <h1 id='no-shifts'>There are no shifts.</h1>}
      {shifts.length > 0 && (
        <>
          <h1 id='view-shifts-heading'>Shifts</h1>
          <ul id='view-shifts-list'>
            {shifts.map((shift: Shift) => (
              <ShiftView shift={shift} onDelete={handleDeleteShift} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
export default ViewShifts
