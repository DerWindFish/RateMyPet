import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {


    return (
        <Link to='/'>
            <div className="logo-wrapper" alt='logo'>
                <img className="logo" alt='ratemypetlogo' src='https://imgur.com/cUheGkw.png' />
            </div>
        </Link>
    )
}

export default Nav