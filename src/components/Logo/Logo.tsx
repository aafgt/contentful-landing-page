import type { LogoProps } from "../../util/types";

 /**
 * Logo component displays a logo image.
 * @param props - LogoProps containing title and image url.
 */
const Logo: React.FC<LogoProps> = ({title, image}) => {
    // Handler for logo click event (for demonstration/logging).
    const handleOnClick = () => {
        console.log("Logo clicked! Navigating to: ", title);
    }
    // Render the logo image with click handler.
    return(
        <img src={image} alt="Icon" className="h-[40px] w-[50px] mt-1.5 cursor-pointer" onClick={handleOnClick} />
    )
}

export default Logo;