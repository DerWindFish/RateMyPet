// import PetDetail from "../components/PetDetail";
// import { useState, useEffect } from "react"
// import axios from "axios"

// const Pets = () => {

//     let [pets, setPets] = useState([])

//     const BASE_URL = 'http://localhost:8000/'

//     useEffect(() => {
//         getPet()
//     }, [])

//     let getPet = async() => {
//         let res = await axios.get(`${BASE_URL}api/pets/`)
//         console.log(res.data)

//         if (res.status === 200 ) {
//             setPets(res.data)
//         }
//     }


//     return(
//         <div className="browse-container">
//             <h3>Them Pets</h3>
//             <div className="pet-grid">
//                 {pets.map((pets)= (
//                     <PetDetail
//                     pet={pets}
//                     key={pets.id}
//                     image_url={pets.image_url}
//                     rating={pets.rating}
//                     />
//                 ))}
//                 <PetDetail 

//                 />
//             </div>
//         </div>
//     )
// }
// export default Pets

import { useNavigate } from "react-router-dom"
import AnimeDetail from "../components/AnimeDetail.jsx"

const Pets = ({ user, authenticated, anime }) => {

  let navigate = useNavigate() 

 return (user && authenticated) ? (
  <div className="browse-container">
    <h3>Anime Database</h3>
    <div className="anime-grid">
    {anime.map((show) => (
        <AnimeDetail 
        show={show}
        key={show.id}
        title={show.title}
        image={show.image}
      />   
    ))}
    </div>
  </div>
) : (
  <div className='protected'>
     <img 
        className="sad-mushi-image"
        src='https://imgur.com/nAbKh6q.png' 
        alt='sad mushi' 
        onClick={()=> navigate('/signin')} 
      />
  </div>
)
}

export default Pets