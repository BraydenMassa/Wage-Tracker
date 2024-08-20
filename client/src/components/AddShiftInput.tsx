import { ChangeEvent } from 'react'

type Props = {
  fieldName: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const AddShiftInput = ({ fieldName, onChange }: Props) => {
  const inputName = fieldName + '-input'
  const label = () => {
    switch (fieldName) {
      case 'hoursWorked':
        return 'Hours worked'
      case 'totalCardTips':
        return 'Card Tips'
      case 'totalCashTips':
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
        autoComplete='off'
        className='add-input-field'
        type='text'
        name={inputName}
        onChange={onChange}
        placeholder='0'
      />
    </div>
  )
}

export default AddShiftInput
