import Card from "./Card";
import { cardsSectionQuery } from "../util/queries";
import type { ContentfulCardsSectionResponse } from "../util/types";
import CTA from "./CTA";
import useFetch from "../hooks/useFetch";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

/**
 * CardSection component renders a Card Section Content entry containing multiple Card components.
 * @param id - The Contentful entry id for the cards section.
 */
const CardSection = ({ id }: { id: string }) => {
  // Fetch cards section data from Contentful.
  const { data, loading, error } =
    useFetch<ContentfulCardsSectionResponse>(cardsSectionQuery(id));

  // Get live updates from Contentful if enabled.
  const liveData = useContentfulLiveUpdates(data);

  // Enable inspector mode for the cards section entry.
  const inspectorProps = useContentfulInspectorMode({
    entryId: liveData?.data.cardsSection.sys.id,
  });

  // Show loading state.
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Show error message if fetching fails.
  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  // Render the section name and a grid of Card components.
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
