import React from 'react';
import './header.css';

const Header = (props) => {
    return(
    <header>
        <div className="title">
           {props.children}
        </div>
    </header>
    )
}

export default Header;
