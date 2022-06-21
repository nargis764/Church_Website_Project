import React from 'react'
import Image from "next/image"


const RCIA = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


    return (
        <div className="px-20 lg:px-32 min-h-screen">
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

            <p className="text-3xl mt-8 text-sky-600 text-center tracking-wider">
                R.C.I.A- Christian Initiation of Adults
            </p>

            <p className="text-lg mt-2">
                The R.C.I.A program is a process of preparing adults for initiation into the Church through the reception of the sacraments of Baptism, Holy Communion, and Confirmation. Anyone who is not baptized, comes from other traditions, or wants to learn more about their Catholic Faith is welcome!
            </p>

            
                <p className="text-xl mt-8 text-sky-600">Contact:</p>

                <p className=" mt-8">
                    Name: &#34;Mr. Gary Schmitt - Deacon&#34;
                </p>

                <p className=" mt-2">
                    Contact: &#34;856.461.0100 ext. 202&#34;
                </p>

                <p className="mt-2">
                    Email: &#34;g.schmitt@jesusthegoodshepherd.org&#34;
                </p>

                <p className="mt-8">
                    Name: &#34;Sheryl Zoppina - Parish Secretary&#34;
                </p>

                <p className=" mt-2">
                    Contact: &#34;856.461.0100 ext. 201&#34;
                </p>

                <p className="mt-2">
                    Email: &#34;s.zoppina@jesusthegoodshepherd.org&#34;
                </p>
        </div>
    )
}

export default RCIA