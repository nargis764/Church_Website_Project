import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DropdownHome from './dropdown-home';
import DropdownMinistries from './dropdown-ministries';
import DropdownRE from './dropdown-re';
import DropdownForm from './dropdown-form';
import DropdownPlaylist from './dropdown-playlist';



const DropdownNavbar = () => {

    const [showDropdownHome, setShowDropdownHome] = useState(false)
    const [showDropdownMinistries, setShowDropdownMinistries] = useState(false)
    const [showDropdownRE, setShowDropdownRE] = useState(false)
    const [showDropdownForm, setShowDropdownForm] = useState(false)
    const [showDropdownPlaylist, setShowDropdownPlaylist] = useState(false)


    return (
        <>
            <ul className="grid grid-template-rows-8 text-center text-white min-w-max bg-black opacity-75 rounded">
                <li className="px-4 py-2 relative hover:bg-blue-800 border-b"
                    onClick={() => { setShowDropdownHome(!showDropdownHome) }}>
                    Home
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    <div className="absolute z-10">
                        {showDropdownHome ? <DropdownHome /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 border-b"
                    onClick={() => { setShowDropdownMinistries(!showDropdownMinistries) }}>
                    Ministries
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    <div className="absolute z-10">
                        {showDropdownMinistries ? <DropdownMinistries /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 border-b"
                onClick={() => { setShowDropdownRE(!showDropdownRE) }}>
                    Religious Education
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    <div className="absolute z-10">
                        {showDropdownRE ? <DropdownRE /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 border-b"
                onClick={() => { setShowDropdownForm(!showDropdownForm)}}>
                    Forms
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    <div className="absolute z-10">
                        {showDropdownForm ? <DropdownForm /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 hover:bg-blue-800 border-b">
                    Donations
                </li>


                <li className="px-4 py-2 hover:bg-blue-800 border-b">
                    Photo Gallery
                </li>


                <li className="px-4 py-2 hover:bg-blue-800 border-b">
                    Mass-Livestreamed
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800"
                onClick = {() => setShowDropdownPlaylist(!showDropdownPlaylist)}>
                    Playlists
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    <div className = "absolute z-10">
                        {showDropdownPlaylist? <DropdownPlaylist/> : null}
                    </div>
                </li>
            </ul>


        </>
    )
}

export default DropdownNavbar