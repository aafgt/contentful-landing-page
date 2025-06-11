import type { CardSectionProps } from "../util/types";
import Card from "./Card";

const CardSection: React.FC<CardSectionProps> = ({ name, cards }) => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold my-3">{name}</h1>
      <div className="flex flex-wrap gap-5">
        {cards.map((card) => (
          <Card
            title={card.title}
            category={card.category}
            image={card.image}
            cta={card.cta}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
