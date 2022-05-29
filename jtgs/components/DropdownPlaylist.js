import React from 'react'
import Link from "next/link"



const DropdownPlaylist = () => {
    
    return (
        <>
            <ul className = "grid grid-template-rows-2 text-left border rounded">
                <li className = "px-4 py-1 hover: bg-gray-100 border-b">
                    <Link href = "/christmas-playlist">CHRISTMAS PLAYLIST</Link> 
                </li>
                
                <li className = "px-4 py-1 hover: bg-gray-100">
                    <Link href = "/lenten-playlist">LENTEN PLAYLIST</Link> 
                </li>
            </ul>
        </>
        
    )
}

export default DropdownPlaylist