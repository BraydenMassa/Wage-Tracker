import { ChangeEvent } from 'react'

type Props = {
  shiftType: string
  setShiftType: (value: string) => void
}

const SelectShiftType = ({ shiftType, setShiftType }: Props) => {
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShiftType(e.target.value)
  }
  return (
    <div id='select-shift-type'>
      <div className='select-shift-radio'>
        <label htmlFor='server-radio'>Server</label>
        <input
          className='select-shift-radio-input'
          type='radio'
          id='server-radio'
          name='shift-type-radio'
          value='Server'
          onChange={handleRadioChange}
          checked={shiftType === 'Server'}
        />
      </div>
      <div className='select-shift-radio'>
        <label htmlFor='bartender-radio'>Bartender</label>
        <input
          className='select-shift-radio-input'
          type='radio'
          id='bartender-radio'
          name='shift-type-radio'
          value='Bartender'
          onChange={handleRadioChange}
          checked={shiftType === 'Bartender'}
        />
      </div>
    </div>
  )
}

export default SelectShiftType
