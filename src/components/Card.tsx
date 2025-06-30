import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import type { CardProps } from "../util/types";

/**
 * Card component displays a product or item with title, category, image, price, and CTA.
 * @param props - CardProps containing card details.
 */
const Card: React.FC<CardProps> = ({
  title,
  category,
  image,
  imageAlt,
  cta,
  price,
  entryId,
}) => {
  const inspectorProps = useContentfulInspectorMode({ entryId });

  return (
    <div className="bg-white rounded-lg shadow-lg p-3 flex">
      <div className="space-y-2 w-2/3">
        <p
          className="bg-yellow-400 rounded-full px-3 py-0.5 font-semibold w-fit"
          {...inspectorProps({ fieldId: "category" })}
        >
          {category}
        </p>
        <h5
          className="font-semibold text-2xl"
          {...inspectorProps({ fieldId: "title" })}
        >
          {title}
        </h5>
        <p
          className="text-3xl font-semibold"
          {...inspectorProps({ fieldId: "price" })}
        >
          Ab einmal {price} €
        </p>
        {cta}
      </div>

      <div className="w-1/3">
        <img
          src={image}
          alt={imageAlt}
          className="object-contain w-full h-full"
          {...inspectorProps({ fieldId: "image" })}
        />
      </div>
    </div>
  );
};

export default Card;
