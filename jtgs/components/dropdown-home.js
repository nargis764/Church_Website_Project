import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'



const DropdownHome = () => {

    const router = useRouter();
    
    
    return (
        <>
            <ul className = "grid grid-template-rows-6 text-left min-w-max bg-blue-900 shadow lg:bg-gray-100 lg:opacity-85 rounded">
                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white transition-all border-b">
                    <Link href = "/directions">Directions</Link>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <p onClick = {() => router.push("https://www.jppc.net/onlinebulletins/511template.pdf")}>
                        Current Bulletin
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <p onClick = {() => router.push("https://drive.google.com/drive/folders/1kCpyRMakRBDVJFjr_v5fTY6-C5t4ALhK")}>
                        Archived Bulletin
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <Link href = "/staff">Staff</Link> 
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <Link href = "/parish-history">Parish History</Link>
                </li> 
            

                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white">
                    <Link href = "/st-peters-cemetery">St. Peter's Cemetery</Link>
                </li>
            </ul>            
        </>
    )
}

export default DropdownHome