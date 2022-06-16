import React, { useState, useEffect } from 'react'
import Image from 'next/image'



const Slider = () => {

    const images = ["/IMG_7883.JPG", "/IMG_7893.JPG", "/IMG_8134.JPG", "/IMG_8160.JPG"]

    const length = images.length - 1

    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => {
                return prev + 1 === images.length ? 0 : prev + 1;
            });
        }, 4000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);




    return (
        <div className="mx-16 mt-20 relative lg:mx-36 ">

            <div>
                <span className="cursor-pointer z-10 absolute top-2/4 left-8 text-white text-3xl font-bold hover:text-green-300 select-none"
                    onClick={() => {
                        setCurrentIndex(currentIndex < 1 ? length : currentIndex - 1)
                    }}>&#10094;</span>

                <span className="cursor-pointer z-10 absolute top-2/4 right-8 text-white text-3xl font-bold hover:text-green-300 select-none"
                    onClick={() => {
                        setCurrentIndex(currentIndex === length ? 0 : currentIndex + 1)
                    }}>&#10095;</span>
            </div>


            <div className="">

                <Image
                    className=""
                    src={images[currentIndex]}
                    loader={() => images[currentIndex]}
                    alt=""
                    layout="responsive"
                    objectFit="cover"
                    width={1250}
                    height={480}
                />
            </div>

        </div>
    )
}

export default Slider