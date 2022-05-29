import React from 'react'
import Link from "next/link"



const DropdownMinistries = () => {
    return (
        <ul className="grid grid-template-rows-1 text-left border rounded">
            <li className = "px-4 py-1 hover: bg-gray-100 border-b">
                <Link href="/sacraments">SACRAMENTS</Link> 
            </li>           
        </ul>
    )
}

export default DropdownMinistries