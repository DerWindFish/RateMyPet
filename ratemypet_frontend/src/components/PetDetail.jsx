import { useState, useEffect } from "react"
import axios from "axios"

const PetDetail = ({ pet }) => {

    const [clicked, isClicked] = useState(false)
    const [add, isAdded] = useState(false)


    return (
        <div className='anime-card'>
    {
      clicked ? ( 
        <div className='popup-wrapper'>
          <div className='popup-container' >
            <div className='popup-info'>
              <img
                src={`${pet.image_url}`}
                alt='petimage'
                style={{maxHeight: "500px"}}
                className='popup'/>
              <div className="popup-info-details">
                <div className="popup-title-wrapper">
                  <h3 className="popup-title-name">{pet.rating}
                    <button className="x-anime button-2B button-1" onClick={()=>isClicked(false)}>x</button>
                  </h3>
                </div>
                  <p>release: {pet.rating}</p>
                  <p>seasons: {pet.seasons}</p>
                  <p>episodes: {pet.episodes}</p>
                  <p>Synopsis: {pet.description}</p>
                </div>
              </div>
            </div>
          <div className='overlay'></div>
        </div>
      ) : (
        <div></div>
      )
    }
    <div className="anime-item" key={pet.id} style={{
        '--poster-img': `url(${pet.image_url}`}}>
      <div className="title-bar">
        <h3>{ pet.title }</h3>
            {
              add ? (
                <div className="add-wrapper">
                <button onClick={()=>isClicked(true)}  className='a-detail-button button-2b button-2'>Show Info</button><p>★</p>
                </div>
              ) : (
                <div className="dash-buttons add-wrapper">
                <button onClick={()=>isClicked(true)}  className='a-detail-button button-2b button-2'>Show Info</button>
                {/* <button className='button2b button-2' onClick={() => {
                  setWatchlist([...watchlist, show])
                  isAdded(true)
                  }}>Add to Watchlist</button>  */}
                </div>
              )
            }
      </div>
    </div>
  </div>

        // <div className="pet-card">
        //     {
        //         clicked ? (
        //             <div className="popup-wrapper">
        //                 <div className="popup-contrainer" >
        //                     <div className="popup-info">
        //                         {pets.map(pet => (
        //                             <div key={pet.id}>
        //                                 <img src={pet.image_url} alt='thepetinquestion' className="pet-image" />
        //                                 <p>{pet.rating}</p>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //     }
        // </div>

        // <div className="pet-wrapper">
        //     <p>Welcome to RateMyPet!</p>

        //     <div>
        //         {pets.map(pet =>(
        //             <div key={pet.id}>
        //                 <img src={pet.image_url} alt='thepetinquestion' className="pet-image" />
        //                 <p>{pet.rating}</p>
        //                 <p>{pet.userratings}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    )
}


export default PetDetail