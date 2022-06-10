import React from 'react'
import Link from "next/link"



const DropdownPlaylist = () => {
    
    return (
        <>
            <ul className = "grid grid-template-rows-2 text-left min-w-max bg-blue-900 lg:bg-gray-100 lg:opacity-85 rounded">
                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <Link href = "/christmas-playlist">Christmas Playlist</Link> 
                </li>
                
                <li className = "px-4 py-2 hover:bg-blue-300">
                    <Link href = "/lenten-playlist">Lenten Playlist</Link> 
                </li>
            </ul>
        </>
        
    )
}

export default DropdownPlaylist