import React from 'react'
import Link from "next/link"
import ReactPlayer from "react-player/youtube";
import YouTube from "react-youtube";



const MassLivestream = () => {

    const opts = {
        // height: '390',
        // width: '640',
        playerVars: {
            autoplay: 1,
        },
    };


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
            {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=21X5lGlDOfg"
                playing={true}
                // muted={true}
                controls={false}
            /> */}


            <div className="aspect-w-16 aspect-h-9 lg:aspect-w-16 lg:aspect-h-9 lg:mx-20">
                <iframe src="https://www.youtube.com/embed/86YLFOog4GM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            </div>


            {/* <YouTube className="aspect-w-16 aspect-h-9 lg:aspect-[16/9]" videoId="21X5lGlDOfg" opts={opts} /> */}


        </div>
    )
}

export default MassLivestream