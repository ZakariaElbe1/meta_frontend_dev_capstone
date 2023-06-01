import React from "react";
import logo from './icons_assets/Logo.svg';

function Navigation () {
    return (
        <ul  style={{display : "flex", justifyContent:"center"}}>
            <li style={{paddingRight:"20px"}}><img src={logo}/></li>
            <li style={{paddingRight:"20px"}}><a>Home</a></li>
            <li style={{paddingRight:"20px"}}><a>About</a></li>
            <li style={{paddingRight:"20px"}}><a>Menu</a></li>
            <li style={{paddingRight:"20px"}}><a>Reservations</a></li>
            <li style={{paddingRight:"20px"}}><a>Order Online</a></li>
            <li style={{paddingRight:"20px"}}><a>Login</a></li>

        </ul>
    )
}

export default Navigation