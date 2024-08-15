import axios from 'axios'
import { Shift } from './types/ShiftType'
import WageCalculator from './WageCalculator'
export default class StatisticsCalculator {
  shifts: Shift[] | null
  constructor() {
    this.shifts = null
  }

  async init() {
    await this.fetchShifts()
  }

  private async fetchShifts() {
    try {
      const res = await axios.get('http://localhost:4000/shifts')
      this.shifts = res.data
    } catch (err) {
      console.error('Error fetching shifts: ', err)
    }
  }
  private checkForShifts() {
    if (!this.shifts || this.shifts.length === 0) {
      return false
    }
    return true
  }
  totalHourlyRate() {
    if (!this.checkForShifts()) {
      return 0
    }
    let totalHours = 0
    let totalMoney = 0
    for (let i = 0; i < this.shifts!.length; i++) {
      const shift = this.shifts![i]
      const wageCalc = new WageCalculator(shift)
      totalHours += shift.hoursWorked
      totalMoney += wageCalc.totalMoney()
    }
    if (totalHours === 0) return 0
    return totalMoney / totalHours
  }

  totalMoney() {
    if (!this.checkForShifts()) {
      return 0
    }
    let totalMoney = 0
    for (let i = 0; i < this.shifts!.length; i++) {
      const wageCalc = new WageCalculator(this.shifts![i])
      totalMoney += wageCalc.totalMoney()
    }
    return totalMoney
  }

  totalHours() {
    if (!this.checkForShifts()) {
      return 0
    }
    let totalHours = 0
    for (let i = 0; i < this.shifts!.length; i++) {
      totalHours += this.shifts![i].hoursWorked
    }
    return totalHours
  }
  private totalHourlyRateBasedOnShiftType(shiftType: string) {
    if (!this.checkForShifts()) {
      return 0
    }
    let totalHours = 0
    let totalMoney = 0
    for (let i = 0; i < this.shifts!.length; i++) {
      if (this.shifts![i].shiftType === shiftType) {
        const shift = this.shifts![i]
        const wageCalc = new WageCalculator(shift)
        totalHours += shift.hoursWorked
        totalMoney += wageCalc.totalMoney()
      }
    }
    if (totalHours === 0) return 0
    return totalMoney / totalHours
  }
  totalHourlyRateServing() {
    return this.totalHourlyRateBasedOnShiftType('Server')
  }
  totalHourlyRateBartending() {
    return this.totalHourlyRateBasedOnShiftType('Bartender')
  }
}
