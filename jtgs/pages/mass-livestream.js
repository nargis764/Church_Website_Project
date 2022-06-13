import React from 'react'
import Link from "next/link"
import ReactPlayer from "react-player/youtube";



const MassLivestream = () => {

    return (
        <div className="px-20 lg:px-32">
            <p className="text-3xl mt-8 text-sky-600">
                Mass Livestream
            </p>

            <p className="text-xl mt-8 text-sky-600">
                <Link href="https://www.youtube.com/channel/UCCS4c14stjvrJ5S49p6F_SQ">MASS - Livestreamed on Youtube </Link>
            </p>

            <p className="text-xl mt-8 mb-4 text-sky-600">
                Current Livestream
            </p>


        {/* Hydration failed error */}
            <ReactPlayer
                url="https://www.youtube.com/watch?v=21X5lGlDOfg"
                playing={true}
                // muted={true}
                controls={false}
            />
        </div>
    )
}

export default MassLivestream