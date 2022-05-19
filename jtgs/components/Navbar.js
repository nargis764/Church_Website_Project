import React from 'react'
import Link from "next/link"

const Navbar = () => {
return (
    <div class="flex justify-between px-10 py-8">
        <div>
            <p>Logo</p>
        </div>
        <div class="flex gap-8 justify-between">
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