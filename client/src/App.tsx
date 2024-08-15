import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddShift from './pages/AddShift'
import ViewShifts from './pages/ViewShifts'
import Statistics from './pages/Statistics'
import './styles/Main.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddShift />} />
        <Route path='/view' element={<ViewShifts />} />
        <Route path='/stats' element={<Statistics />} />
      </Routes>
    </Router>
  )
}

export default App
