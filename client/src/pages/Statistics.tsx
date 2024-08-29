import StatisticsCalculator from '../StatisticsCalculator'
import { useState, useEffect } from 'react'
import BackArrow from '../components/BackArrow'
import '../styles/Statistics.css'

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
    <div className='container'>
      <h1 className='heading' id='statistics-heading'>
        Statistics
      </h1>
      <main id='stats-main' className='main'>
        <BackArrow id='stats-back-arrow' />
        <p>Total hours worked: {statsCalc?.totalHours().toFixed(1)}</p>
        <p>Total money: ${statsCalc?.totalMoney().toFixed(2)}</p>
        <p>
          Total average hourly rate: ${statsCalc?.totalHourlyRate().toFixed(2)}
        </p>
        <p>
          Total Serving hourly rate: $
          {statsCalc?.totalHourlyRateServing().toFixed(2)}
        </p>
        <p>
          Total Bartending hourly rate: $
          {statsCalc?.totalHourlyRateBartending().toFixed(2)}
        </p>
      </main>
    </div>
  )
}
export default Statistics
