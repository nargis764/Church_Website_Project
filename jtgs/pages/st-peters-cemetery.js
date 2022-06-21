import React from 'react'
import Image from "next/image"



const StPetersCemetery = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


    return (
        <div className="px-20 md:px-32 lg:px-44">
            <Image
                className=""
                src={imgURL}
                //loader function generates the URL for the image by appending a root domain to the provided source
                //apparently we don't need the loader function for locally stored images
                loader={() => imgURL}
                alt=""
                // layout = "fill" 
                layout="responsive"
                objectFit="cover"
                width={1250}
                height={380}
            />

            <p className="text-3xl py-10 pb-5 text-sky-600 text-center tracking-wider">
                St. Peter&#39;s Cemetery
            </p>

            <p className="text-2xl mt-5 text-sky-600">
                St. Peter&#39;s Roman Catholic Cemetery and Mausoleum Est. 1917
            </p>

            <p className="text-lg mt-2">
                Please Contact the Parish Office for Plot &#38; Mausoleum Availability.
            </p>

            <p>
                856.461.0100
            </p>
            
        </div>
    )
}

export default StPetersCemetery