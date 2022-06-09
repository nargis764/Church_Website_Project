import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'



const LentenPlaylist = () => {

    const [selectedSong, setSelectedSong] = useState("")

    
return (
        <div className="px-20 lg:px-80">
            <p className="text-3xl mt-8 mb-8 text-sky-600">
                Lenten Playlist
            </p>

            
            <ReactAudioPlayer className="w-full" src={`${selectedSong}`} autoPlay controls />


            <ul className="w-50 mt-10 leading-10">
                <li
                    className="cursor-pointer flex justify-between text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { setSelectedSong("/Believer.mp3") }} >
                    <p>1. Believer - Imagine Dragons</p>
                    <p>3:36</p>

                </li>


                <li
                    className="cursor-pointer flex justify-between text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { setSelectedSong("/Demons.mp3") }}>
                    <p>2. Demons - Imagine Dragons </p>
                    <p>3:56</p>
                </li>


                <li
                    className="cursor-pointer flex justify-between text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { setSelectedSong("/It'sASin.mp3") }}>
                    <p>3. It's A Sin - Pet Shop Boys</p>
                    <p>5:10</p>
                </li>

            </ul>

        </div>
    )
}

export default LentenPlaylist