import type { CTAProps } from "../util/types";

/**
 * CTA (Call To Action) button component.
 * @param props - CTAProps containing title, url, and optional className.
 */
const CTA: React.FC<CTAProps> = ({ title, url, ...props }) => {
  return (
    <button type="button" {...props}>
      {title}
    </button>
  );
};

export default CTA;
