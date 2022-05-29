import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";



const DropdownForm = () => {
    const router = useRouter();

    return (
        <div>
            <ul className = "grid grid-template-rows-8 text-left border rounded">
                <li className = "px-4 py-1 hover: bg-gray-100 border-b">
                    <Link href = "/parish-registration-form">PARISH REGISTRATION FORM</Link>
                </li>

                <li className = "px-4 py-1 hover: bg-gray-100 border-b">
                    <Link href = "/facility-scheduling-form">FACILITY SCHEDULING FORM</Link>
                </li>

                <li className = "px-4 py-1 hover: bg-gray-100 border-b">
                    <p className = "cursor-pointer"
                        onClick= {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/JTGS-Student-Registration-Form_v3.pdf") }}>
                        STUDENT REGISTRATION FORM
                    </p>
                </li>

                <li className = "px-4 py-1 hover: bg-gray-100 border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/Hall-Rental-Agreement.pdf") }}>
                        HALL RENTAL AGREEMENT FORM
                    </p>
                </li>

                <li className = "px-4 py-1 hover: bg-gray-100 border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/JTGS-REP-2021-2022-Calendar.pdf") }}>
                        RELIGIOUS EDUCATION CALENDAR
                    </p>
                </li>

                <li className = "px-4 py-1 hover: bg-gray-100 border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Guide-for-Making-a-Good-Confession.pdf") }}>
                        GUIDE FOR MAKING A GOOD CONFESSION
                    </p>
                </li>

                <li className = "px-4 py-1 hover: bg-gray-100 border-b">
                    <p className = "cursor-pointer"
                        onClick = {() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/Wedding-Guidelines.pdf") }}>
                        WEDDING GUIDELINES
                    </p>
                </li>

                <li className = "px-4 py-1 hover: bg-gray-100">
                    <p className = "cursor-pointer"
                        onClick={() => { router.push("https://www.jesusthegoodshepherd.org/wp-content/uploads/Forms/Wedding-Confirmation-Date.pdf") }}>
                        WEDDING CONFIRMATION DATE
                    </p>
                </li>
            </ul>


        </div>
    )
}

export default DropdownForm