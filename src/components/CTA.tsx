import type { CTAProps } from "../util/types";

const CTA: React.FC<CTAProps> = ({ title, url, ...props }) => {
  return (
    <button type="button" {...props}>
      {title}
    </button>
  );
};

export default CTA;
