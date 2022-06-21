import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF , faYoutube } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {

    return (
        <div className = "flex flex-col bg-gray-500 px-20 py-10 text-center text-white bottom-0 mt-10 lg:flex-row justify-between lg:text-lg lg:text-left">
            <div className = "lg:ml-10">
                <ul>
                    <li className = "">Address</li>
                    <li className = "pt-2">805 Warren Street Beverly, NJ 08010</li>
                    <li>Telephone (856) 461-0100</li>
                    <li>Fax (856) 764-6133</li>
                    <li className="hover:underline">
                        <Link href = {`mailto: ${"info@jesusthegoodshepherd.org"}`}>
                                <a className="text-lg">{"info@jesusthegoodshepherd.org"}</a>
                        </Link>
                        
                    </li>
                </ul>
            </div>



            <div className = "">
                {/* <p className = "w-1/2 border-b text-center">Office Hours</p> */}
                <p className = "">Office Hours</p>
                <p className = "pt-2">Monday-Thursday • 9am-3pm</p>
                <p>Friday-Sunday • closed</p>
            </div>



            <div  className = "">
                <ul>
                    {/* <li className = "w-1/2 border-b">Quick Links</li> */}
                    <li className = "">Quick Links</li>

                    {/* <li className = "pt-2 hover:font-bold hover:text-blue-900"> */}
                    <li className = "pt-2 hover:underline">  
                        <Link href="/times-and-directions">
                            Times and Directions
                        </Link>
                    </li>

                    <li className = "hover:underline">
                        <Link href="/contact-me">
                            Contact Me
                        </Link>
                    </li>

                    <li className = "hover:underline">
                        <Link href="https://www.jesusthegoodshepherd.org/wp-content/uploads/Our-Business-Patrons_20210815.pdf">
                            Patronize Our Bulletin Sponsors
                        </Link>
                    </li>

                            
                </ul>
            </div>



            <div className = "">
                <ul>
                    <li>Follow us on:</li>
                    <li className="cursor-pointer pt-2">
                        <span>
                            <Link href = "https://www.facebook.com/jesusthegoodshepherdparish">
                                <FontAwesomeIcon icon = {faFacebookF}></FontAwesomeIcon>
                            </Link>
                        </span>

                        <span className = "ml-4">
                            <Link href = "https://www.youtube.com/channel/UCCS4c14stjvrJ5S49p6F_SQ/featured">
                                <FontAwesomeIcon icon = {faYoutube}></FontAwesomeIcon>
                            </Link>
                        </span>                        
                    </li>
                </ul>
            </div>            
        </div>
    )
}

export default Footer