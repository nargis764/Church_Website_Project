import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";



const DropdownForm = () => {
    
    const router = useRouter();
    

    return (
        <div>
            <ul className = "grid grid-template-rows-8 text-left min-w-max bg-blue-900 lg:bg-gray-100 lg:opacity-85 rounded">
                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <Link href = "/parish-registration-form">Parish registration form</Link>
                </li>
                

                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <Link href = "/facility-scheduling-form">Facility scheduling form</Link>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/JTGS-Student-Registration-Form_v3.pdf") }}>
                        Student registration form
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/Hall-Rental-Agreement.pdf") }}>
                        Hall rental agreement form
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/JTGS-REP-2021-2022-Calendar.pdf") }}>
                        Religious eductaion calendar
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Guide-for-Making-a-Good-Confession.pdf") }}>
                        Guide for making a good confession
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/Wedding-Guidelines.pdf") }}>
                        Wedding guidelines
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300">
                    <p className = "cursor-pointer"
                        onClick={() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/Wedding-Confirmation-Date.pdf") }}>
                        Wedding confirmation date
                    </p>
                </li>
            </ul>


        </div>
    )
}

export default DropdownForm