import StatisticsCalculator from '../StatisticsCalculator'
import { useState, useEffect } from 'react'
import '../styles/Statistics.css'
import BackArrow from '../components/BackArrow'

const Statistics = () => {
  const [statsCalc, setStatsCalc] = useState<StatisticsCalculator | null>(null)

  useEffect(() => {
    const initializeStatsCalc = async () => {
      const calc = new StatisticsCalculator()
      await calc.init()
      setStatsCalc(calc)
    }
    initializeStatsCalc()
  }, [])
  return (
    <div id='statistics-container'>
      <h1 className='heading' id='statistics-heading'>
        Statistics
      </h1>
      <main id='statistics-main'>
        <BackArrow id='stats-back-arrow' />
        <h2>Total hours worked: {statsCalc?.totalHours()}</h2>
        <h2>Total money: ${statsCalc?.totalMoney().toFixed(2)}</h2>
        <h2>
          Total average hourly rate: ${statsCalc?.totalHourlyRate().toFixed(2)}
        </h2>
        <h2>
          Total Serving hourly rate: $
          {statsCalc?.totalHourlyRateServing().toFixed(2)}
        </h2>
        <h2>
          Total Bartending hourly rate: $
          {statsCalc?.totalHourlyRateBartending().toFixed(2)}
        </h2>
      </main>
    </div>
  )
}
export default Statistics
