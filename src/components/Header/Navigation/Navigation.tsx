import Link from "../Link/Link";
import Logo from "../../Logo/Logo";
import Links from "../Links/Links";

interface NavigationProps {
  image: string; 
}
const Navigation: React.FC<NavigationProps> = ({image}) => {
  const styles =
    "font-bold text-2xl hover:scale-110 hover:text-red-500 cursor-pointer";
  return (
    
    <div className="flex flex-row bg-white shadow-xl items-start space-x-10 p-2">
      <Logo url="http://www.google.com/" image={image} />
      <Links type="single">
        <Link url="http://www.google.com/" title="Categories" styles={styles} />
        <Link url="http://www.google.com/" title="Categories" styles={styles} />
        <Link url="http://www.google.com/" title="Categories" styles={styles} />
        <Link url="http://www.google.com/" title="Categories" styles={styles} />
      </Links> 
    </div>
  );
};

export default Navigation;
