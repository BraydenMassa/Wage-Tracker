import { Shift } from './types/ShiftType'

export default class WageCalculator {
  readonly hoursWorked: number
  readonly cashTips: number
  readonly cardTips: number
  readonly hourlyWage: number

  constructor(shift: Shift) {
    this.hoursWorked = shift.hoursWorked
    this.cashTips = shift.totalCashTips
    this.cardTips = shift.totalCardTips
    this.hourlyWage = 6.75
  }

  totalTips(): number {
    return this.cashTips + this.cardTips
  }

  totalHourly(): number {
    return this.hourlyWage * this.hoursWorked
  }

  totalMoney(): number {
    return this.totalHourly() + this.totalTips()
  }

  totalMoneyPerHour(): number {
    return this.totalMoney() / this.hoursWorked
  }
}
