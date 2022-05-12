import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import Pets from './pages/Pets'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/ratethepets' element={<Pets />} /> */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
