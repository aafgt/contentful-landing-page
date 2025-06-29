import Card from "./Card";
import { cardsSectionQuery } from "../util/queries";
import type { ContentfulCardsSectionResponse } from "../util/types";
import CTA from "./CTA";
import useFetch from "../hooks/useFetch";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

const CardSection = ({id}: {id: string}) => {
  const { data, loading, error } =
    useFetch<ContentfulCardsSectionResponse>(cardsSectionQuery(id));

  const liveData = useContentfulLiveUpdates(data);

  const inspectorProps = useContentfulInspectorMode({
    entryId: liveData?.data.cardsSection.sys.id,
  });

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  return (
    <div className="p-5">
      <h1
        className="text-3xl font-semibold my-3"
        {...inspectorProps({ fieldId: "name" })}
      >
        {liveData?.data.cardsSection.name}
      </h1>
      <div
        className="grid grid-cols-2 max-md:grid-cols-1 gap-5"
        {...inspectorProps({ fieldId: "cards" })}
      >
        {liveData?.data.cardsSection.cardsCollection.items.map(
          (card) => (
            <Card
              key={card?.title}
              title={card?.title}
              category={card?.category}
              image={card?.image?.url}
              imageAlt={card?.image?.title}
              cta={
                <CTA
                  title={card?.cta?.title}
                  url={card?.cta?.url}
                  className="text-red-700 hover:underline hover:cursor-pointer"
                  {...inspectorProps({ entryId: card.sys.id, fieldId: "cta" })}
                />
              }
              price={card?.price}
              entryId={card?.sys.id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CardSection;
