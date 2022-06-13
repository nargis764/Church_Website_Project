import React, { useState } from 'react'
import Image from "next/image"
import ReactAudioPlayer from 'react-audio-player'



const LentenPlaylist = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const [selectedSong, setSelectedSong] = useState("")
    const [selectedTitle, setSelectedTitle] = useState("")


    return (
        <div className="px-20 lg:px-44">
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

            <p className="text-3xl mt-8 mb-8 text-center text-sky-600 tracking-wider">
                Lenten Playlist
            </p>

            <div className="lg:px-36">
                <p className="text-xl mb-4">{selectedTitle}</p>
            <ReactAudioPlayer className="w-full" src={`${selectedSong}`} autoPlay controls />


            <ul className="w-50 mt-10 leading-10">
                <li
                    className="cursor-pointer flex justify-between text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { setSelectedSong("/Believer.mp3")
                    setSelectedTitle("Believer - Imagine Dragons") }} >
                    <p>1. Believer - Imagine Dragons</p>
                    <p>3:36</p>

                </li>


                <li
                    className="cursor-pointer flex justify-between text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { setSelectedSong("/Demons.mp3") 
                    setSelectedTitle("Demons - Imagine Dragons")}}>
                    <p>2. Demons - Imagine Dragons </p>
                    <p>3:56</p>
                </li>


                <li
                    className="cursor-pointer flex justify-between text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { setSelectedSong("/It'sASin.mp3") 
                    setSelectedTitle("It's A Sin - Pet Shop Boys")}}>
                    <p>3. It's A Sin - Pet Shop Boys</p>
                    <p>5:10</p>
                </li>


                <li
                    className="cursor-pointer flex justify-between text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { setSelectedSong("/Believer.mp3") 
                    setSelectedTitle("Believer - Imagine Dragons")}} >
                    <p>4. Believer - Imagine Dragons</p>
                    <p>3:36</p>

                </li>


                <li
                    className="cursor-pointer flex justify-between text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { setSelectedSong("/Demons.mp3") 
                    setSelectedTitle("Demons - Imagine Dragons")}}>
                    <p>5. Demons - Imagine Dragons </p>
                    <p>3:56</p>
                </li>


                <li
                    className="cursor-pointer flex justify-between text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { setSelectedSong("/It'sASin.mp3") 
                    setSelectedTitle("It's A Sin - Pet Shop Boys")}}>
                    <p>6. It's A Sin - Pet Shop Boys</p>
                    <p>5:10</p>
                </li>

            </ul>

            </div>

        </div>
    )
}

export default LentenPlaylist