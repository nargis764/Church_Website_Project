import React from 'react'
import Link from "next/link"
import Image from "next/image"

const Card = ({source, title, telephone, email}) => {
return (

        // <div class="rounded-lg shadow-lg bg-white my-4 w-80">
        <div class="flex flex-col w-80 mx-auto my-10 lg:flex-row justify-between lg:w-full"> 
        
        <div>
                <Image class="rounded mt-6 shadow" 
                src = {source} 
                loader={() => source}                
                alt=""
                width={320} height={240}
                />
        </div>      
                
                <div class="p-6 flex-1">
                        <h5 class="text-gray-900 text-lg font-semibold mb-2">{title}</h5>
                        <p class="text-gray-700 text-base mb-4">{telephone}</p>
                        {/* sending email to the clicked email Id */}
                        <Link href={"mailto:" + email}>
                                <a class="text-gray-600 text-s">{email}</a>
                        </Link>
                </div>
        </div>


//     <div class="flex justify-center my-6">
//     <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
//     {/* <img class=" w-full h-96 md:h-auto object-center md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" 
//     src = {source} 
//     alt = "" /> */}

//     <img class=" w-full h-96 md:h-auto object-center md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" 
//     src = {source} 
//     alt = "" />
//     <div class="p-6 flex flex-col justify-start">
//         <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
//         <p class="text-gray-700 text-base mb-4">
//         {telephone}
//         </p>
//         <p class="text-gray-600 text-xs">{email}</p>
//     </div>
//     </div>
// </div>

)
}

export default Card