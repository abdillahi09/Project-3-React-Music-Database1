import React from 'react';
import { Link } from 'react-router-dom';

// This is for the website header.

const Header = () =>{
    return(
        <header>
            <Link to="/">Music DB</Link>
        </header>
    )
}

export default Header;