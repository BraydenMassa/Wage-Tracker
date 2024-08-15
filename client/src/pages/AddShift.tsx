import '../styles/AddShift.css'
import AddShiftInput from '../components/AddShiftInput'
import BackArrow from '../components/BackArrow'
<<<<<<< HEAD
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
            fieldName='hours'
          />
          <AddShiftInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCardTips(e.target.value)
            }
            fieldName='card'
          />
          <AddShiftInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCashTips(e.target.value)
            }
            fieldName='cash'
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
=======
import { useState } from 'react'

const AddShift = () => {
	const [hours, setHours] = useState(0)
	const [cardTips, setCardTips] = useState(0)
	const [cashTips, setCashTips] = useState(0)
	return (
		<div id='add-shift-container'>
			<main className='main' id='add-shift-main'>
				<BackArrow />
				<h1 className='heading'>Add Shift</h1>
				<div id='add-shift-form'>
					<AddShiftInput fieldName='hours' />
					<AddShiftInput fieldName='card' />
					<AddShiftInput fieldName='cash' />
					<button id='add-shift-btn' className='btn'>
						Save
					</button>
				</div>
			</main>
		</div>
	)
>>>>>>> 956fba5c3e37223177728698a58d59d22a200e39
}
export default AddShift
