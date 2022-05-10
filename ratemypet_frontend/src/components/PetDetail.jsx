import { useState, useEffect } from "react"
import axios from "axios"

const PetDetail = () => {
    let [pets, setPets] = useState([])

    const BASE_URL = 'http://localhost:8000/'

    useEffect(() => {
        getPet()
    }, [])

    let getPet = async() => {
        let res = await axios.get(`${BASE_URL}api/pets/`)

        if (res.status === 200 ) {
            setPets(res.data)
        }
    }

    return (
        <div className="pet-wrapper">
            <p>Welcome to RateMyPet!</p>

            <div>
                {pets.map(pet =>(
                    <div key={pet.id}>
                        <img src={pet.image_url} alt='thepetinquestion' className="pet-image" />
                        <p>{pet.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default PetDetail