import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({authenticated, user}) => {

    let navigate = useNavigate()

    let authOptions
    if(user) {
        authOptions = (
            <div>
                <h2>Welcome to RateMyPet!</h2>
            </div>
        )
    }

    const unAuthOptions = (
        <div className="spalsh-page">
            <h2>Welcome to RateMyPet!</h2>
            <button className="button-button-button2" onClick={() => navigate('/login')}>
                Click To Sign In
            </button>
            <h2>Need to Register?</h2>
            <button className="button-button-button2" onClick={() => navigate('/register')}>
                Click to make an Account
            </button>
        </div>
    )

    return (
        <div>
        {authenticated && user ? authOptions : unAuthOptions}
        </div>
    )
}

export default HomePage