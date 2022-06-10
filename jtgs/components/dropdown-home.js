import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'



const DropdownHome = () => {

    const router = useRouter();
    
    
    return (
        <>
            <ul className = "grid grid-template-rows-6 text-left min-w-max bg-blue-900 lg:bg-gray-100 lg:opacity-85 rounded">
                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <Link href = "/directions">Directions</Link>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <p onClick = {() => router.push("https://www.jppc.net/onlinebulletins/511template.pdf")}>
                        Current bulletin
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <p onClick = {() => router.push("https://drive.google.com/drive/folders/1kCpyRMakRBDVJFjr_v5fTY6-C5t4ALhK")}>
                        Archived bulletin
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <Link href = "/staff">Staff</Link> 
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <Link href = "/parishhistory">Parish history</Link>
                </li> 
            

                <li className = "px-4 py-2 hover:bg-blue-300">
                    <Link href = "/st-peters-cemetery">St. Peter's cemetery</Link>
                </li>
            </ul>            
        </>
    )
}

export default DropdownHome