import Footing from "./Footing/Footing";

/**
 * Footer component renders the Footing Content entry.
 * @param id - The Contentful entry id for the footer.
 */
const Footer = ({ id }: { id: string }) => {
  // Render the Footing component, passing the footer entry id.
  return <Footing id={id} />;
};
export default Footer;
