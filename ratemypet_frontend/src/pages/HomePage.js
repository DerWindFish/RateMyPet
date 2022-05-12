import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

const HomePage = () => {
    // let [users, setUsers] = useState([])

    // const BASE_URL = 'http://localhost:8000/'

    // useEffect(() => {
    //     getUser()
    // }, [])

    // let getUser = async() => {
    //     let res = await axios.get(`${BASE_URL}api/users/`)

    //     if (res.status === 200 ) {
    //         setUsers(res.data)
    //     }
    // }

    return (
        <div>
            <p>Welcome to RateMyPet!</p>

            {/* <ul>
                {users.map(user =>(
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default HomePage