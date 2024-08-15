<<<<<<< HEAD
import { ChangeEvent } from 'react'
import '../styles/AddShift.css'

type Props = {
  fieldName: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const AddShiftInput = ({ fieldName, onChange }: Props) => {
  const inputName = fieldName + '-input'
  const label = () => {
    switch (fieldName) {
      case 'hours':
        return 'Hours worked'
      case 'card':
        return 'Card Tips'
      case 'cash':
        return 'Cash Tips'
      default:
        return 'err'
    }
  }
  return (
    <div className='add-shift-input'>
      <label htmlFor={inputName}>{label()}</label>
      <input
        id={inputName}
        className='add-input-field'
        type='text'
        name={inputName}
        onChange={onChange}
        placeholder='0'
      />
    </div>
  )
=======
import '../styles/AddShift.css'

type Props = {
	fieldName: string
}
const AddShiftInput = ({ fieldName }: Props) => {
	const inputName = fieldName + '-input'
	const label = () => {
		switch (fieldName) {
			case 'hours':
				return 'Hours worked'
			case 'card':
				return 'Card Tips'
			case 'cash':
				return 'Cash Tips'
			default:
				return 'err'
		}
	}
	return (
		<div className='add-shift-input'>
			<label htmlFor={inputName}>{label()}</label>
			<input
				id={inputName}
				className='add-input-field'
				type='text'
				name={inputName}
				placeholder='0'
			/>
		</div>
	)
>>>>>>> 956fba5c3e37223177728698a58d59d22a200e39
}

export default AddShiftInput
