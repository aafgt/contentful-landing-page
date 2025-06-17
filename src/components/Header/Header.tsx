import HerroBanner from "./HeroBanner/HeroBanner";
import Navigation from "./Navigation/Navigation";
import Heading from "./Heading/Heading";
const Header = () => {
  return (
    <>
      <div className="fixed">
        <Heading  />
        <Navigation  />
      </div>
      <div className="pt-[115px]">
      <HerroBanner />
      </div>
    </>
  );
};

export default Header;
