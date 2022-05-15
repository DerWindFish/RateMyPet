import './App.css'
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import { GetPets, GetUserRating } from './services/PetServices'
import HomePage from './pages/HomePage'
import Nav from './components/Nav'
import Pets from './pages/Pets'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import UserOptions from './pages/UserOptions'
import { ContextProvider } from './components/Context'




function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [pet, setPet] = useState([])
  const [userRating, setUserRating] = useState([])
  // const [rating, setRating] = useState([])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    const getTheAnimals = async () => {
      const data = await GetPets()
      setPet(data)
    }
    getTheAnimals()
  }, [])

  const logout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const getUserRatings = async () => {
      const data = await GetUserRating()
      setUserRating(data)
    }
    getUserRatings()
  },[])

  // useEffect(() => {
  //   const getTheRatings = async () => {
  //     const data = await GetRatings()
  //     setRating(data)
  //   }
  //   getTheRatings()
  // }, [])

  return (
    <div className='App'>
      <ContextProvider>
      <Nav 
        authenticated={authenticated}
        user={user}
        logout={logout}
      />
      <Routes>
        <Route path='/' element={<HomePage 
          user={user}
          authenticated={authenticated}
        />} />
        <Route path='/ratethepets' element={<Pets 
          pet={pet}
          user={user}
          userRating={userRating}
          // ratings={rating}
          authenticated={authenticated}
        />} />
        <Route path='/login' element={<LoginPage 
          setUser={setUser}
          user={user}
          authenticated={authenticated}
          toggleAuthenticated={toggleAuthenticated}
        />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user_options' element={<UserOptions 
          user={user}
        />} />
      </Routes>
      </ContextProvider>
    </div>
  )
}

export default App
