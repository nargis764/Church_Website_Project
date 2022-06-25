import React from 'react'
import Link from "next/link"
import Image from "next/image"



const Card = ({source, title, telephone, email}) => {

        
return (

        // <div class="rounded-lg shadow-lg bg-white my-4 w-80">
        <div className = "flex flex-col my-10 pt-5 lg:bg-gray-100 text-center px-10 lg:px-24 lg:shadow-lg rounded">
                <div>
                        <Image className = "rounded mt-6 shadow text-center lg:px-32"
                                src = {source}
                                //loader function generates the URL for the image by appending a root domain to the provided source
                                loader = {() => source}
                                alt=""       
                                objectFit="cover"               
                                width = {320} height = {240}
                        />
                </div>
                


                <div className = "py-6">
                        <h5 className = "text-gray-900 text-lg font-semibold text-gray-500 mb-2 text-lg lg:text-xl">{title}</h5>
                        <p className = "text-gray-700 text-gray-500 text-md mb-4">{telephone}</p>
                        {/* sending email to the clicked email Id */}
                        <Link href = {`mailto: ${email}`}>
                                <a className="text-gray-600 text-md lg:text-lg underline">{email}</a>
                        </Link>
                </div>
        </div>




)
}

export default Card