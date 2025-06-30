import { contentSectionQuery } from "../util/queries";
import CTA from "./CTA";
import useFetch from "../hooks/useFetch";
import type { ContentfulContentSectionResponse } from "../util/types";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

/**
 * ContentSection component displays content section's Content entry with image, title, description, price, and CTA.
 * @param id - The Contentful entry id for the content section.
 */
const ContentSection = ({ id }: { id: string }) => {
  const { data, loading, error } = useFetch<ContentfulContentSectionResponse>(
    contentSectionQuery(id)
  );

  const liveData = useContentfulLiveUpdates(data);

  const inspectorProps = useContentfulInspectorMode({
    entryId: liveData?.data.contentSection.sys.id,
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
          src={liveData?.data.contentSection.image.url}
          alt={liveData?.data.contentSection.image.title}
          className="object-contain w-full h-full"
          {...inspectorProps({ fieldId: "image" })}
        />
      </div>
      <div className="w-1/2 space-y-3 flex flex-col justify-center">
        <h5
          className="text-3xl font-light"
          {...inspectorProps({ fieldId: "title" })}
        >
          {liveData?.data.contentSection.title}
        </h5>
        <p
          className="text-xl font-light"
          {...inspectorProps({ fieldId: "description" })}
        >
          {
            liveData?.data.contentSection.description.json.content[0].content[0]
              .value
          }
        </p>
        <p
          className="text-3xl font-semibold"
          {...inspectorProps({ fieldId: "price" })}
        >
          Ab einmal {liveData?.data.contentSection.price} €
        </p>

        <CTA
          title={liveData?.data.contentSection.cta.title || ""}
          url={liveData?.data.contentSection.cta.url || ""}
          className="bg-red-500 text-white text-xl font-normal rounded-md px-4 py-2 w-fit hover:cursor-pointer hover:bg-red-700"
          {...inspectorProps({ fieldId: "cta" })}
        />
      </div>
    </div>
  );
};

export default ContentSection;
