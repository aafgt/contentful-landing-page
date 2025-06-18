import { contentSectionQuery } from "../util/queries";
import CTA from "./CTA";
import useFetch from "../hooks/useFetch";
import type { ContentfulContentSectionResponse } from "../util/types";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

const ContentSection: React.FC = () => {
  const { data, loading, error } =
    useFetch<ContentfulContentSectionResponse>(contentSectionQuery);

  const liveData = useContentfulLiveUpdates(data);

  const inspectorProps = useContentfulInspectorMode({
    entryId: liveData?.data.contentSectionCollection.items[0].sys.id,
  });

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  return (
    <div className="flex p-5 rounded-md shadow-md w-full h-fit">
      <div className="w-1/2">
        <img
          src={liveData?.data.contentSectionCollection.items[0].image.url}
          alt={liveData?.data.contentSectionCollection.items[0].image.title}
          className="object-contain w-full h-full"
          {...inspectorProps({ fieldId: "image" })}
        />
      </div>
      <div className="w-1/2 space-y-3 flex flex-col justify-center">
        <h5
          className="text-3xl font-light"
          {...inspectorProps({ fieldId: "title" })}
        >
          {liveData?.data.contentSectionCollection.items[0].title}
        </h5>
        <p
          className="text-xl font-light"
          {...inspectorProps({ fieldId: "description" })}
        >
          {
            liveData?.data.contentSectionCollection.items[0].description.json
              .content[0].content[0].value
          }
        </p>
        <p
          className="text-3xl font-semibold"
          {...inspectorProps({ fieldId: "price" })}
        >
          Ab einmal {liveData?.data.contentSectionCollection.items[0].price} €
        </p>

        <CTA
          title={
            liveData?.data.contentSectionCollection.items[0].cta.title || ""
          }
          url={liveData?.data.contentSectionCollection.items[0].cta.url || ""}
          className="bg-red-500 text-white text-xl font-normal rounded-md px-4 py-2 w-fit hover:cursor-pointer hover:bg-red-700"
          {...inspectorProps({ fieldId: "cta" })}
        />
      </div>
    </div>
  );
};

export default ContentSection;
