import React from 'react'

const Card = ({source, title, telephone, email}) => {
return (

    
        <div class="rounded-lg shadow-lg bg-white max-w-sm">            
                <img class="rounded-t-lg" 
                src = {source} 
                alt=""/>
                
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p class="text-gray-700 text-base mb-4">{telephone}</p>
                    <p class="text-gray-600 text-xs">{email}</p>
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