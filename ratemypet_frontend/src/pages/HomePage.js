import React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from '../context/AuthContext'
import useAxios from '../services/useAxios'

const HomePage = () => {
    let [users, setUsers] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    let api = useAxios()

    useEffect(() => {
        getUser()
    }, [])

    let getUser = async() => {
        let res = await api.get('/api/users/')

        if (res.status === 200 ) {
            setUsers(res.data)
        }
    }

    return (
        <div>
            <p>You're logged it!</p>

            <ul>
                {users.map(user =>(
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage