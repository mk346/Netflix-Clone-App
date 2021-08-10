import React, {useState,useEffect} from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 100){
                handleShow(true)

            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
            className="nav_logo"
            src="https://pnglux.com/wp-content/uploads/2021/03/1617196638_210_Netflix-logo-PNG-Photos.png" 
            alt="Netflix Logo">
                
            </img>
            <img className="nav_avatar"
             src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" 
             alt="Netflix logo">

             </img>

            
        </div>
    )
}

export default Nav
