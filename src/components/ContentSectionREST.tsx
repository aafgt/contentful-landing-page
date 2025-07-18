import useFetchREST from "../hooks/useFetchREST";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

/**
 * ContentSection component displays content section's Content entry with image, title, description, price, and CTA.
 * @param id - The Contentful entry id for the content section.
 */
const ContentSection = ({ id }: { id: string }) => {
  // Fetch content section data from Contentful.
  const { data, loading, error } = useFetchREST<any>(id);

  // Get live updates from Contentful if enabled.
  const liveData = useContentfulLiveUpdates(data);

  // Enable inspector mode for the content section entry.
  const inspectorProps = useContentfulInspectorMode({
    entryId: id,
  });

  // Show loading state.
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Show error message if fetching fails.
  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  // Render the content section with image, title, description, price, and CTA button.
  return (
    <div className="flex p-5 rounded-md shadow-md w-full h-fit">
      <div className="w-1/2">
        {/* <img
          src={liveData?.data.contentSection.image.url}
          alt={liveData?.data.contentSection.image.title}
          className="object-contain w-full h-full"
          {...inspectorProps({ fieldId: "image" })}
        /> */}
        <p>{liveData?.fields?.image.sys.id}</p>
      </div>
      <div className="w-1/2 space-y-3 flex flex-col justify-center">
        <h5
          className="text-3xl font-light"
          {...inspectorProps({ fieldId: "title" })}
        >
          {liveData?.fields.title}
        </h5>
        <p
          className="text-xl font-light"
          {...inspectorProps({ fieldId: "description" })}
        >
          {
            liveData?.fields.description.content[0].content[0].value
          }
        </p>
        <p
          className="text-3xl font-semibold"
          {...inspectorProps({ fieldId: "price" })}
        >
          Ab einmal {liveData?.fields.price} €
        </p>

        {/* <CTA
          title={liveData?.data.contentSection.cta.title || ""}
          url={liveData?.data.contentSection.cta.url || ""}
          className="bg-red-500 text-white text-xl font-normal rounded-md px-4 py-2 w-fit hover:cursor-pointer hover:bg-red-700"
          {...inspectorProps({ fieldId: "cta" })}
        /> */}
        <p>{liveData?.fields.cta.sys.id}</p>
      </div>
    </div>
  );
};

export default ContentSection;
