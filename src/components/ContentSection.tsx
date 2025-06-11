import type { ContentSectionProps } from "../util/types";

const ContentSection: React.FC<ContentSectionProps> = ({
  image,
  title,
  description,
  price,
  cta,
}) => {
  return (
    <div className="flex p-5 rounded-md shadow-md w-full h-fit">
      <div className="w-1/2">
        {image ? (
          <img src={image} alt={title} width={300} height={300} />
        ) : (
          <p>image</p>
        )}
      </div>
      <div className="w-1/2 space-y-3">
        <h5 className="text-3xl font-light">{title}</h5>
        <p className="text-xl font-light">{description}</p>
        <p className="text-3xl font-semibold">Ab einmal {price} €</p> 
        {cta}
      </div>
    </div>
  );
};

export default ContentSection;
