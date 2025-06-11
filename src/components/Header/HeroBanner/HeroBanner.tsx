import type React from "react";

interface HerroBannerProps {
    image: string;
}

const HerroBanner: React.FC<HerroBannerProps> = ({image}) => {
    return(
        <img
            src={image}
            className="w-screen min-h-[200px] max-h-[300px] object-center rounded-2xl"
            alt="Hero Banner"
        />
    )
}

export default HerroBanner;