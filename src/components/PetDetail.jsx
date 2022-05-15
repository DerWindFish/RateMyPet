import { useState, useEffect } from "react"
import UserRatings from './UserRatings'
import { GetUserRating } from "../services/PetServices"

const PetDetail = ({pets}) => {

  const [clicked, isClicked] = useState(false)
  const [userRating, setUserRating] = useState([])


  useEffect(() => {
    const getUserRatings = async () => {
      const data = await GetUserRating()
      setUserRating(data)
    }
    getUserRatings()
  },[])
  
  return(
    <div className="pet-card">
      {
        clicked ? (
          <div className="popup-wrapper">
            <div className="popup-container">
              <div className="popup-info">
                <img src={pets.image_url} alt='the pet' className="popup" style={{maxHeight: '500px'}} />
                <div className="popup-info-details">
                  <div className="popup-title-wrapper">
                    <h3 className="popup-title-name">
                      {pets.rating}
                      <button className="button-button-button2" onClick={() => isClicked(false)}>x</button>
                    </h3>
                  </div>
                  <p>Select A Rating:</p>
                  {userRating.map((userRatings) => (
                    <UserRatings 
                      userRatings={userRatings}
                      key={userRatings.key}
                      userrating={userRatings.userrating}
                    />
                  ))}
                  <p>User Ratings:</p>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        ) : (
          <div></div>
        )
      }
      <div className="pet-item" key={pets.id} style={{
        '--poster-img': `url(${pets.image_url}`
      }} onClick={()=> isClicked(true)}>
        <div className='title-bar'>
          <h3>{ pets.rating }</h3>
        </div>
      </div>
    </div>
  )
}

export default PetDetail