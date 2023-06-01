import React from "react";
import photo from './icons_assets/Mario and Adrian A.jpg';

function Footer () {
    return (
        <div style={{display : "flex", justifyContent:"center", padding:"40px"}}>
        <img src={photo} height={"60px"} width={"40px"}/>
        <ul>
            <p><strong>Doormat Navigation</strong></p>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>

        </ul>

        <ul>

            <p><strong>Contact</strong></p>
            <li><a>Address</a></li>
            <li><a>Phone Numbers</a></li>
            <li><a>Email</a></li>

        </ul>

        <ul>

            <p><strong>Social Media links</strong></p>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
            <li><a>Twitter</a></li>

        </ul>

        </div>
    )
}

export default Footer