import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Pets = () => {
    let [pets, setPets] = useState([])

    const BASE_URL = 'http://localhost:8000/'

    useEffect(() => {
        getPet()
    }, [])

    let getPet = async() => {
        let res = await axios.get(`${BASE_URL}api/users/`)

        if (res.status === 200 ) {
            setPets(res.data)
        }
    }

    return (
        <div>
            {pets.map(pet =>{
                <div key={pet.id}>
                    <img src={pet.image_url} alt='pet' />
                </div>
            })}
        </div>
    )
}

export default Pets