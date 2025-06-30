import type React from "react";
import useFetch from "../../../hooks/useFetch";
import type {
  ContentfulHeroBannerResponse,
  HeroBannerProps,
} from "../../../util/types";
import { useContentfulInspectorMode, useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { heroBannerQuery } from "../../../util/queries";

/**
 * HerroBanner component displays the hero banner image.
 * @param id - The Contentful entry id for the hero banner.
 */
const HerroBanner= ({id}:{id:string}) => {
  // Fetch hero banner data from Contentful.
  const { data, error, loading } =
    useFetch<ContentfulHeroBannerResponse>(heroBannerQuery(id));
  // Enable inspector mode for the hero banner entry.
  const inspectorProps = useContentfulInspectorMode({entryId:data?.data?.heroBanner?.sys.id})
  // Get live updates from Contentful if enabled.
  let liveData = useContentfulLiveUpdates(data);
  let dataObj: HeroBannerProps | undefined;
  // Show loading state.
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Show error message if fetching fails.
  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }
  // Use live data if available, otherwise fallback to fetched data.
  if (liveData) {
    dataObj = liveData?.data?.heroBanner;
  } else {
    dataObj = data?.data?.heroBanner;
  }
  // Log the image URL for debugging.
  console.log(dataObj?.image.url)
  // Render the hero banner image.
  return (
    <>
      <img {...inspectorProps({fieldId: "heroBanner"})}
        src={dataObj?.image.url}
        alt={dataObj?.title}
        className="w-screen min-h-[200px] max-h-[300px] object-center rounded-2xl"
      />
    </>
  );
};

export default HerroBanner;
