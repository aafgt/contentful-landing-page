import Card from "./Card";
import { cardsSectionQuery } from "../util/queries";
import type { ContentfulCardsSectionResponse } from "../util/types";
import CTA from "./CTA";
import useFetch from "../hooks/useFetch";

const CardSection: React.FC = () => {
  const { data, loading, error } =
    useFetch<ContentfulCardsSectionResponse>(cardsSectionQuery);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold my-3">
        {data?.data.cardsSectionCollection.items[0].name}
      </h1>
      <div className="flex flex-wrap gap-5">
        {data?.data.cardsSectionCollection.items[0].cardsCollection.items.map(
          (card) => (
            <Card
              key={card.title}
              title={card.title}
              category={card.category}
              image={card.image?.url}
              cta={
                <CTA
                  title={card.cta.title}
                  url={card.cta.url}
                  className="text-red-700 hover:underline hover:cursor-pointer"
                />
              }
              price={card.price}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CardSection;
