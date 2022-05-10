import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import Pets from './pages/Pets'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ratethepets' element={<Pets />} />
      </Routes>
    </div>
  )
}

export default App
