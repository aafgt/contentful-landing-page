import type { LogoProps } from "../../util/types";


const Logo: React.FC<LogoProps> = ({title, image}) => {
    const handleOnClick = () => {
        console.log("Logo clicked! Navigating to: ", title);
    }
    return(
        <img src={image} alt="Icon" className="h-[40px] w-[50px] mt-1.5 cursor-pointer" onClick={handleOnClick} />
    )
}

export default Logo;