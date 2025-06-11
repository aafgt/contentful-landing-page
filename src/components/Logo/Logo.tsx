
interface LogoProps {
    url: string;
    image: string; 
}

const Logo: React.FC<LogoProps> = ({url, image}) => {
    const handleOnClick = () => {
        console.log("Logo clicked! Navigating to: ", url);
    }
    return(
        <img src={image} alt="Icon" className="h-[50px] w-[50px] cursor-pointer" onClick={handleOnClick} />
    )
}

export default Logo;