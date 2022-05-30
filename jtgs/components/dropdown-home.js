import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'



const DropdownHome = () => {
    const router = useRouter();
    
    return (
        <>
            <ul className = "grid grid-template-rows-6 text-left border min-w-max bg-gray-100 opacity-85 rounded">
                <li className = "px-4 py-2 hover:bg-blue-100 border-b">
                    <Link href = "/directions">DIRECTIONS</Link>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-100 border-b">
                    <p onClick = {() => router.push("https://www.jppc.net/onlinebulletins/511template.pdf")}>
                        CURRENT BULLETIN
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-100 border-b">
                    <p onClick = {() => router.push("https://drive.google.com/drive/folders/1kCpyRMakRBDVJFjr_v5fTY6-C5t4ALhK")}>
                        ARCHIVED BULLETIN
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-100 border-b">
                    <Link href = "/staff">STAFF</Link> 
                </li>


                <li className = "px-4 py-2 hover:bg-blue-100 border-b">
                    <Link href = "/parishhistory">PARISH HISTORY</Link>
                </li> 
            

                <li className = "px-4 py-2 hover:bg-blue-100">
                    <Link href = "/st-peters-cemetery">ST.PETER'S CEMETERY</Link>
                </li>
            </ul>            
        </>
    )
}

export default DropdownHome