import React from 'react'
import Link from "next/link"
import Image from "next/image"



const Card = ({source, title, telephone, email}) => {

        
return (

        // <div class="rounded-lg shadow-lg bg-white my-4 w-80">
        <div className = "flex flex-col mx-auto my-10 lg:flex-row justify-between lg: w-full">
                <div>
                        <Image className = "rounded mt-6 shadow"
                                src = {source}
                                //loader function generates the URL for the image by appending a root domain to the provided source
                                loader = {() => source}
                                alt=""
                                layout = "responsive"
                                width = {300} height = {240}
                        />
                </div>
                


                <div className = "p-6 flex-1">
                        <h5 className = "text-gray-900 text-xl font-semibold text-gray-500 mb-2">{title}</h5>
                        <p className = "text-gray-700 text-gray-500 text-lg mb-4">{telephone}</p>
                        {/* sending email to the clicked email Id */}
                        <Link href = {`mailto: ${email}`}>
                                <a class="text-gray-600 text-lg">{email}</a>
                        </Link>
                </div>
        </div>




)
}

export default Card