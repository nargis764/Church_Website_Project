import React, { useState } from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import DropdownHome from "./DropdownHome";
import DropdownMinistries from './DropdownMinistries';
import DropdownForm from './DropdownForm';
import DropdownPlaylist from './DropdownPlaylist';




const Navbar = () => {

    const [showDropdownHome, setShowDropdownHome] = useState(false)
    const [showDropdownMinistries, setShowDropdownMinistries] = useState(false)
    const [showDropdownForm, setShowDropdownForm] = useState(false)
    const [showDropdownPlaylist, setShowDropdownPlaylist] = useState(false)


    const router = useRouter();
    
    return (
        <div className = "flex justify-between items-center px-10 py-8">
            <div>
                <p>Logo</p>
            </div>

            <div className = "lg:hidden">
                <FontAwesomeIcon
                    icon = {faBars}
                    className = "fas fa-bars">
                </FontAwesomeIcon>
            </div>



            {/* <div className = "hidden lg:visible"> */}
            <ul className = "hidden lg:flex gap-8 justify-between">
                <li className = "relative group font-bold text-lg text-gray-500 cursor-pointer">
                    {/* <p onClick = {() => { setShowDropdownHome(!showDropdownHome) }}> */}
                    <p onClick = {() =>  router.push("/")}>
                        Home
                    </p>
                    {/* {showDropdownHome && <DropdownHome />}  */}
                    {/* <div className = {showDropdownHome? "visible" : "hidden"}>
                        <DropdownHome />
                    </div>   */}
                    <div className = "hidden absolute z-10 group-hover:block">
                        <DropdownHome />
                    </div>
                </li>



                <li className = "font-bold text-lg text-gray-500 cursor-pointer">
                    <p onClick = {() => { setShowDropdownMinistries(!showDropdownMinistries) }}>
                        Ministries
                    </p>
                    <div className = {showDropdownMinistries ? "visible absolute z-10" : "hidden"}>
                        <DropdownMinistries />
                    </div>
                </li>



                <li className = "relative group font-bold text-lg text-gray-500 cursor-pointer">
                    <p>Religious Education</p>
                    <div className = "hidden absolute z-10 group-hover: block">
                        <ul className = "text-left border rounded">
                            <li className = "px-4 py-1 hover: bg-gray-100 border-b">RELIGIOUS EDUCATION</li>
                            <li className = "px-4 py-1 hover: bg-gray-100">RCIA-RITE OF CHRISTIAN INITIATION OF ADULTS</li>
                        </ul>
                    </div>
                </li>



                <li className="font-bold text-lg text-gray-500 cursor-pointer">
                    <p onClick={() => { setShowDropdownForm(!showDropdownForm) }}>
                        Forms
                    </p>
                    <div className={showDropdownForm ? "visible absolute z-10" : "hidden"}>
                        <DropdownForm />
                    </div>
                </li>



                <li className = "font-bold text-lg text-gray-500 cursor-pointer"><Link href="/donations">Donations</Link></li>
                <li className = "font-bold text-lg text-gray-500 cursor-pointer"><Link href="/photogallery">Photo Gallery </Link></li>
                <li className = "font-bold text-lg text-gray-500 cursor-pointer"><Link href="/mass-livestreamed">Mass-Livestreamed</Link></li>



                <li className = "relative group font-bold text-lg text-gray-500 cursor-pointer">
                    {/* <p 
                    onMouseOver = {() => {setShowDropdownPlaylist(!showDropdownPlaylist)}}
                    onMouseOut = {() => {setShowDropdownPlaylist(false)}}>
                        Playlists
                    </p> */}

                    <p>Playlists</p>

                    {/* <div className = {showDropdownPlaylist? "visible" : "hidden"}> */}
                    <div className = "hidden absolute z-10 group-hover: block">
                        <DropdownPlaylist />
                    </div>
                </li>
            </ul>

            {/* </div> */}


        </div>
    )
}

export default Navbar