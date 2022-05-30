import React from 'react'
import Link from "next/link"
import Image from "next/image"



const CatholicCharities = () => {

    let imgURL =
    "https://www.jesusthegoodshepherd.org/wp-content/uploads/CC2012-LogoPMS-300x162.jpg";


    return (
        <div className = "flex flex-col px-10 lg:flex-row justify-between lg:items-center">            
            <Image
                src = {imgURL}
                loader = {() => imgURL}
                alt = ""
                width = {350}
                height = {200}>
            </Image>

            
            <p className = "px-10 leading-8 text-sm lg:text-xl lg:flex-1">
                Know someone needing assistance with food, housing, drug addiction, mental health, domestic violence or immigration? Contact
                Catholic Charities, Diocese of Trenton
                <Link href = "https://www.catholiccharitiestrenton.org/">
                    <span className = "text-blue-700 font-semibold cursor-pointer"> www.catholiccharitiestrenton.org</span>
                </Link>
            </p>
        </div>
    )
}

export default CatholicCharities