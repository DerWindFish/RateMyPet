import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
