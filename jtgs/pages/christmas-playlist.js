import {useState} from "react";
import ReactAudioPlayer from 'react-audio-player'


const ChristmasPlaylist = () => {

    const [selectedSong, setSelectedSong] = useState("")


    return (
        <div className = "px-20 lg:px-80">
            <h1>Christmas Playlist</h1>
            <ReactAudioPlayer src={`${selectedSong}`} autoPlay controls />
            

            <ul className = "w-50 mt-10 leading-10">
                <li
                    className="cursor-pointer flex justify-between"
                    onClick={() => { setSelectedSong("/Believer.mp3") }} >
                    <p>1. Believer - Imagine Dragons</p>
                    <p>3:36</p>

                </li>


                <li
                    className="cursor-pointer flex justify-between"
                    onClick={() => { setSelectedSong("/Demons.mp3") }}>
                    <p>2. Demons - Imagine Dragons </p>
                    <p>3:56</p>
                </li>


                <li
                    className="cursor-pointer flex justify-between"
                    onClick={() => { setSelectedSong("/It'sASin.mp3") }}>
                    <p>3. It's A Sin - Pet Shop Boys</p>
                    <p>5:10</p>
                </li>

            </ul>

        </div>
    )
}

export default ChristmasPlaylist