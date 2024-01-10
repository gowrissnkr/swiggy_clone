import { useEffect, useState } from "react";
import { LOADER_IMAGE_URL } from "../constants/constants";
import { images } from "../constants/constants";

export const LoadingSlider = () => {
    const [imageIndex, setImageIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 1000)

        return () => clearInterval(interval)
    }, [imageIndex])

    return (
        <div>
            <div className="h-[344px] bg-[#171a29] flex flex-col justify-center items-center">
                <div className="relative w-[80px] h-[80px] ">
                    <div className="w-full h-full rounded-full bg-white absolute bg-gradient-to-b 
                from-gray-200 to-slate-800 to-50% after:absolute after:rounded-full after:bg-[#171a29]
                after:content-['*'] after:w-[72px] after:h-[72px] after:top-1 after:left-1 after:block 
                animate-spin">
                    </div>
                    <img
                        className="w-[40px] z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src={`${LOADER_IMAGE_URL}` + images[imageIndex]}
                        alt="carousel"
                    />
                </div>
                <div className="mt-8 font-light tracking-wide text-[#cbd5e1] text-[26px]">Looking for great food near you ...</div>
            </div>
        </div>
    )
}
