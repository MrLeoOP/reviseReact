import React from "react";
import "./css/navbar.css"

const Navbar=()=>{
    return(
        <>
            <div className="main">
                <div className="logo">
                    <img src="https://cdn.vox-cdn.com/thumbor/pNxD2NFOCjbljnMPUSGdkFWeDjI=/0x0:3151x2048/1400x788/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"></img>
                </div>

                <div className="menu">
                    <ul>
                        <li>
                            <a href="">Home</a>
                            <a href="">Contact</a>
                            <a href="">Booking</a>
                            <a href="">More</a>
                        </li>
                    </ul>
                </div>

                <div className="tools">
                <ul>
                    <li>
                        <a href="">Exit</a>
                    </li>
                </ul>
                    
                </div>

            </div>
        </>
    )

}

export default Navbar