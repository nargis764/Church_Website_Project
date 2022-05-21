import React from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
return (
    <div class="flex justify-between items-center px-10 py-8">
        <div>
            <p>Logo</p>
        </div>
        
        <div className="lg:hidden">
        <FontAwesomeIcon
            icon = {faBars}
            className = "fas fa-bars">            
        </FontAwesomeIcon>
        </div>
        

        
        <div class="hidden lg:flex gap-8 justify-between">
            <Link href="/">Home</Link>
            <Link href="/ministries">Ministries</Link>
            <Link href="/religious-eduction">Religious Education</Link>
            <Link href="/forms">Forms</Link>
            <Link href="/donations">Donations</Link>
            <Link href="/photogallery">Photo Gallery </Link> 
            <Link href="/mass-livestreamed">Mass-Livestreamed</Link> 
            <Link href="playlists">Playlists</Link>  
        </div>
       

    </div>
)
}

export default Navbar