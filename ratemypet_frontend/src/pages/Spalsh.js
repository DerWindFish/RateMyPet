import { useNavigate } from "react-router-dom";

const Spalsh = () => {
    let navigate = useNavigate()

    return (
        <div className="spalsh-page">
            <h2>Welcome to RateMyPet!</h2>
            <button className="login-button" onClick={() => navigate('/login')}>
                Click To Sign In
            </button>
            <h2>Need to Register?</h2>
            <button className="login-button" onClick={() => navigate('/register')}>
                Click to make an Account
            </button>
        </div>
    )
}

export default Spalsh