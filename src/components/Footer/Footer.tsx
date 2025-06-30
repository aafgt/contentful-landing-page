import Footing from "./Footing/Footing";

/**
 * Footer component renders the Footing Content entry.
 * @param id - The Contentful entry id for the footer.
 */
const Footer = ({ id }: { id: string }) => {
  return <Footing id={id} />;
};
export default Footer;
