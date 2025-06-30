import type { CTAProps } from "../util/types";

/**
 * CTA (Call To Action) button component.
 * @param props - CTAProps containing title, url, and optional className.
 */
const CTA: React.FC<CTAProps> = ({ title, url, ...props }) => {
  // Render a button with the provided title and props.
  // The url prop can be used for navigation or analytics if needed.
  return (
    <button type="button" {...props}>
      {title}
    </button>
  );
};

export default CTA;
