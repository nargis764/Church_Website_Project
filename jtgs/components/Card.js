import React from 'react'
import Link from "next/link"
import Image from "next/image"



const Card = ({source, title, telephone, email}) => {

        
return (

        // <div class="rounded-lg shadow-lg bg-white my-4 w-80">
        <div className = "flex flex-col w-80 mx-auto my-10 lg:flex-row justify-between lg: w-full">
                <div>
                        <Image className = "rounded mt-6 shadow"
                                src = {source}
                                //loader function generates the URL for the image by appending a root domain to the provided source
                                loader = {() => source}
                                alt=""
                                width = {320} height = {240}
                        />
                </div>
                


                <div className = "p-6 flex-1">
                        <h5 className = "text-gray-900 text-lg font-semibold text-gray-500 mb-2">{title}</h5>
                        <p className = "text-gray-700 text-gray-500 text-base mb-4">{telephone}</p>
                        {/* sending email to the clicked email Id */}
                        <Link href = {`mailto: ${email}`}>
                                <a class="text-gray-600 text-s">{email}</a>
                        </Link>
                </div>
        </div>




)
}

export default Card