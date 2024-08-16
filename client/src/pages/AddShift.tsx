import '../styles/AddShift.css'
import AddShiftInput from '../components/AddShiftInput'
import BackArrow from '../components/BackArrow'
import { ChangeEvent, FormEvent, SetStateAction, useState } from 'react'
import axios from 'axios'

const AddShift = () => {
  const [hoursWorked, setHours] = useState('')
  const [totalCardTips, setCardTips] = useState('')
  const [totalCashTips, setCashTips] = useState('')

  const isValidNumber = (value: string): boolean => {
    return !isNaN(Number(value)) && value.trim() !== ''
  }

  const isFormValid = (): boolean => {
    return (
      isValidNumber(hoursWorked) &&
      isValidNumber(totalCardTips) &&
      isValidNumber(totalCashTips)
    )
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (isFormValid()) {
      const shiftData = {
        hoursWorked: Number(hoursWorked),
        totalCardTips: Number(totalCardTips),
        totalCashTips: Number(totalCashTips),
      }
      try {
        const res = await axios.post('http://localhost:4000/shifts', shiftData)
        setHours('')
        setCardTips('')
        setCashTips('')
      } catch (err) {
        console.error('Error submitting form: ', err)
      }
    } else {
      alert('Please enter valid numbers in all fields.')
    }
  }
  return (
    <div id='add-shift-container'>
      <main className='main' id='add-shift-main'>
        <BackArrow id='add-back-arrow' />
        <h1 className='heading'>Add Shift</h1>
        <form onSubmit={handleSubmit} id='add-shift-form'>
          <AddShiftInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setHours(e.target.value)
            }
            fieldName='hoursWorked'
          />
          <AddShiftInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCardTips(e.target.value)
            }
            fieldName='totalCardTips'
          />
          <AddShiftInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCashTips(e.target.value)
            }
            fieldName='totalCashTips'
          />
          <input
            type='submit'
            id='add-shift-btn'
            className='btn'
            value='Save'
          />
        </form>
      </main>
    </div>
  )
}
export default AddShift
