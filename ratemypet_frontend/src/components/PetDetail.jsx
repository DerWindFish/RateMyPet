import { useState } from "react"

const PetDetail = ({pets}) => {

  const [clicked, isClicked] = useState(false)
  
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
                      <button className="x" onClick={() => isClicked(false)}>x</button>
                    </h3>
                  </div>
                  <p>User Ratings</p>
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
      }}>
        <div className='title-bar'>
          <h3>{ pets.rating }</h3>
              <div className="add=wrapper">
                <button onClick={()=> isClicked(true)} classname='isClicked-button'>Show Info</button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default PetDetail