import HeadingFooter from "./Heading-Footer/HeadingFooter";
import HerroBanner from "./HeroBanner/HeroBanner";
import Navigation from "./Navigation/Navigation";
import banner from "../../assets/header-image.jpg"
import logo from "../../assets/header-image.jpg"
const Header = () => {
  return (
    <>
      <HeadingFooter type="heading"/>
      <Navigation image={logo} />
      <HerroBanner image={banner}/>
    </>
  );
};

export default Header;
