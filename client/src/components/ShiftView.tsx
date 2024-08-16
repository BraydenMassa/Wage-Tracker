import { Shift } from '../types/ShiftType'
import WageCalculator from '../WageCalculator'
import '../styles/Main.css'
import axios from 'axios'

type Props = {
  shift: Shift
  onDelete: (id: string) => void
}

const ShiftView = ({ shift, onDelete }: Props) => {
  const formattedDate = new Date(shift.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  const calc = new WageCalculator(shift)
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:4000/shifts/${id}`)
      onDelete(id)
    } catch (err) {
      console.error('Failed to delete the shift: ', err)
    }
  }
  return (
    <li key={shift._id} id='shift-view'>
      {shift.shiftType} shift on {formattedDate} for {shift.hoursWorked} hours |
      Card tips: ${shift.totalCardTips} | Cash tips: ${shift.totalCashTips} |
      $/hr: ${calc.totalMoneyPerHour().toFixed(2)} | total $: $
      {calc.totalMoney().toFixed(2)}{' '}
      <button
        className='shift-view-delete'
        onClick={() => handleDelete(shift._id)}
      >
        Delete
      </button>
    </li>
  )
}

export default ShiftView
