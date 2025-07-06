import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import useFetch from "../hooks/useFetch";
import { cardQuery } from "../util/queries";
import type { CardProps, ContentfulCardResponse } from "../util/types";
import CTA from "./CTA";
import { useNavigate } from "react-router-dom";

/**
 * Card component displays a product or item with title, category, image, price, and CTA.
 * @param props - CardProps containing card details.
 */
const Card: React.FC<CardProps> = ({ slug }) => {

  const navigate = useNavigate();

  const { data, loading, error } = useFetch<ContentfulCardResponse>(
    cardQuery,
    slug
  );

  const liveData = useContentfulLiveUpdates(data);

  // Hook to enable Contentful inspector mode for this card entry.
  const inspectorProps = useContentfulInspectorMode({
    entryId: liveData?.data?.cardCollection?.items[0]?.sys?.id,
  });

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Show error message if fetching fails.
  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-3 flex">
        <div className="space-y-2 w-2/3">
          <p
            className="bg-yellow-400 rounded-full px-3 py-0.5 font-semibold w-fit"
            {...inspectorProps({ fieldId: "category" })}
          >
            {liveData?.data?.cardCollection?.items[0]?.category}
          </p>
          <h5
            className="font-semibold text-2xl"
            {...inspectorProps({ fieldId: "title" })}
          >
            {liveData?.data?.cardCollection?.items[0]?.title}
          </h5>
          <p
            className="text-3xl font-semibold"
            {...inspectorProps({ fieldId: "price" })}
          >
            Ab einmal {liveData?.data?.cardCollection?.items[0]?.price} €
          </p>

          <CTA
            title={liveData?.data?.cardCollection?.items[0]?.cta?.title || ""}
            url={liveData?.data?.cardCollection?.items[0]?.cta?.url || ""}
            className="text-red-700 hover:underline hover:cursor-pointer"
            {...inspectorProps({ fieldId: "cta" })}
          />
        </div>

        <div className="w-1/3">
          <img
            src={liveData?.data?.cardCollection?.items[0]?.image?.url}
            alt={liveData?.data?.cardCollection?.items[0]?.image?.title}
            className="object-contain w-full h-full"
            {...inspectorProps({ fieldId: "image" })}
          />
        </div>
      </div>
      {!slug && <button type="button" onClick={() => { navigate(-1) }}>back</button>}
    </>
  );
};

export default Card;
