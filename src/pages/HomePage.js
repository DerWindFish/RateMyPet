import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({authenticated, user}) => {

    let navigate = useNavigate()

    let authOptions
    if(user) {
        authOptions = (
            <div>
                <h1>Welcome to RateMyPet!</h1>
            <h2>Here at RateMyPet, we take your lovely, wonderful, amazing pet photos and give them funny, whimsicle, and just generally wonderful ratings!</h2>
            <h3 className='ratethepets' onClick={() => navigate('/ratethepets')}>Click Here to go Straight to the Pets!</h3>
            </div>
        )
    }

    const unAuthOptions = (
        <div className="spalsh-page">
            <h1>Welcome to RateMyPet!</h1>
            <h2>Here at RateMyPet, we take your lovely, wonderful, amazing pet photos and give them funny, whimsicle, and just generally wonderful ratings!</h2>
            <button className="button-button-button2" onClick={() => navigate('/login')}>
                Click To Sign In
            </button>
            <h2>Need to Register?</h2>
            <button className="button-button-button2" onClick={() => navigate('/register')}>
                Click to make an Account
            </button>
            <h3>Not sure if this is the place for you? Check out our Review page for what other users are saying about this amazing site!</h3>
            <button className="button-button-button2" onClick={() => navigate('/reviews')}>Reviews</button>
        </div>
    )

    return (
        <div>
        {authenticated && user ? authOptions : unAuthOptions}
        </div>
    )
}

export default HomePage