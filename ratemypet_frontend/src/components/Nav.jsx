import React from "react";
import { Link } from "react-router-dom";

const Nav = ({authenticated, user}) => {
    let authOptions
    if (user) {
        authOptions = (
            <nav className="navbar">
                <h4>Welcome in, {user.username}!</h4>
                <Link to='/homepage'>Home Page</Link>
                <Link to='/user_options'>User</Link>
                <Link to='/ratethepets'>The Pets</Link>
            </nav>
        )
    }

    const unAuthOptions = (
        <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </nav>
    )

    return (
        <header>
            <Link to='/'>
                <div className="logo-wrapper" alt='logo'>
                    <img className="logo" alt='ratemypetlogo' src='https://imgur.com/cUheGkw.png' />
                </div>
            </Link>
            {authenticated && user ? authOptions : unAuthOptions}
        </header>
    )
}

export default Nav