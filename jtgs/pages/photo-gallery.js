import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";


const PhotoGallery = () => {

    const router = useRouter();

    return (
        <div className="px-20 lg:px-80">
            <p className="text-3xl mt-8 text-sky-600">
                Photo Gallery
            </p>

            <p className="text-lg mt-5 underline hover:text-teal-600">
                <Link href="https://drive.google.com/drive/folders/1hvPEPop1xPxX2BFfWO_jFnY8J8a2zkke">Gallery</Link>
            </p>
        </div>
    )
}

export default PhotoGallery