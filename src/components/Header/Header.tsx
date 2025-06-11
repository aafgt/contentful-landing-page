import HeadingFooter from "./Heading-Footer/HeadingFooter";
import HerroBanner from "./HeroBanner/HeroBanner";
import Navigation from "./Navigation/Navigation";
import banner from "../../assets/VFbg.jpg";
import logo from "../../assets/VF-Logo.png";
const Header = () => {
  return (
    <>
      <div className="fixed">
        <HeadingFooter type="heading" />
        <Navigation image={logo} />
      </div>
      <div className="pt-[115px]">
      <HerroBanner image={banner} />
      </div>
    </>
  );
};

export default Header;
