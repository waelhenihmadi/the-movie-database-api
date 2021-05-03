import React from 'react';
import '../App.css';
import  Linkk  from 'react-router-dom/Link';

function Nav(){
    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <Linkk to="/">
                  <li>Home</li>
                </Linkk>
                <Linkk to="/about">
                  <li>About</li>
                </Linkk>
            </ul>
        </nav>
    );
}

export default Nav;