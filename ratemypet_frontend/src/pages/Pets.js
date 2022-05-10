// import React from "react";
// import { useState, useEffect } from "react";
// import axios from 'axios'

// const Pets = () => {
//     let [pets, setPets] = useState([])

//     const BASE_URL = 'http://localhost:8000/'

//     useEffect(() => {
//         getPet()
//     }, [])

//     let getPet = async() => {
//         let res = await axios.get(`${BASE_URL}api/pets/`)

//         if (res.status === 200 ) {
//             setPets(res.data)
//         }
//     }

//     return (
//         <div className="pet-wrapper">
//             <p>Welcome to RateMyPet!</p>

//             <div>
//                 {pets.map(pet =>(
//                     <div key={pet.id}>
//                         <img src={pet.image_url} alt='thepetinquestion' className="pet-image" />
//                         <p>{pet.rating}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Pets

import PetDetail from "../components/PetDetail";

const Pets = () => {
    return(
        <div className="browse-container">
            <h3>Them Pets</h3>
            <div className="pet-grid">
                <PetDetail />
            </div>
        </div>
    )
}
export default Pets