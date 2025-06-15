import type { CardProps } from "../util/types";

const Card: React.FC<CardProps> = ({ title, category, image, cta, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 flex lg:max-w-1/2">
      <div className="space-y-2 w-2/3">
        <p className="bg-yellow-400 rounded-full px-3 py-0.5 font-semibold w-fit">{category}</p>
        <h5 className="font-semibold text-2xl">{title}</h5>
        <p className="text-3xl font-semibold">Ab einmal {price} €</p>
        {cta}
      </div>

      <div className="w-1/3">
        <img src={image} alt={title} width={100} height={100} />
      </div>
    </div>
  );
};

export default Card;
