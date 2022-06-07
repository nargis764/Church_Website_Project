import React from 'react'
import Link from "next/link"



const DropdownPlaylist = () => {
    
    return (
        <>
            <ul className = "grid grid-template-rows-2 text-left border min-w-max bg-gray-100 opacity-85 rounded">
                <li className = "px-4 py-2 hover:bg-blue-100 border-b">
                    <Link href = "/christmas-playlist">CHRISTMAS PLAYLIST</Link> 
                </li>
                
                <li className = "px-4 py-2 hover:bg-blue-100">
                    <Link href = "/lenten-playlist">LENTEN PLAYLIST</Link> 
                </li>
            </ul>
        </>
        
    )
}

export default DropdownPlaylist