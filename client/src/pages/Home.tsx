import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='container'>
      <h1 id='home-heading' className='heading'>
        Welcome to Wage Tracker!
      </h1>
      <main className='main'>
        <div id='home-links'>
          <Link className='btn' to='/add'>
            Add New Shift
          </Link>
          <Link className='btn' to='/view'>
            View Shifts
          </Link>
          <Link className='btn' to='/stats'>
            Statistics
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
