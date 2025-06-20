import type React from "react";
import useFetch from "../../../hooks/useFetch";
import type {
  ContentfulHeroBannerResponse,
  HeroBannerProps,
} from "../../../util/types";
import { HeroBannerQuery } from "../../../util/queries";
import { useContentfulInspectorMode, useContentfulLiveUpdates } from "@contentful/live-preview/react";

const HerroBanner: React.FC = () => {
  const { data, error, loading } =
    useFetch<ContentfulHeroBannerResponse>(HeroBannerQuery);
  const inspectorProps = useContentfulInspectorMode({entryId:data?.data?.heroBanner?.sys.id})
  let liveData = useContentfulLiveUpdates(data);
  let dataObj: HeroBannerProps | undefined;
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }
  if (liveData) {
    dataObj = liveData?.data?.heroBanner;
  } else {
    dataObj = data?.data?.heroBanner;
  }
  console.log(dataObj?.image.url)
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
