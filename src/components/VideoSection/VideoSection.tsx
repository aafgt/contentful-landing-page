import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import useFetch from "../../hooks/useFetch";
import { videoSectionQuery } from "../../util/queries";
import type {
  ContentfulVideoSectionResponse,
  VideoSectionProps,
} from "../../util/types";

/**
 * VideoSection component displays Video Section Content entry that contains a video with a title.
 * @param id - The Contentful entry id for the video section.
 */
const VideoSection = ({ id }: { id: string }) => {
  // Fetch video section data from Contentful.
  const { data, error, loading } = useFetch<ContentfulVideoSectionResponse>(
    videoSectionQuery(id)
  );

  let dataObj: VideoSectionProps | undefined;
  // Get live updates from Contentful if enabled.
  let liveData = useContentfulLiveUpdates(data);
  // Enable inspector mode for the video section entry.
  const inspectorProps = useContentfulInspectorMode({
    entryId: data?.data.videoSection.sys.id,
  });

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
    dataObj = liveData?.data?.videoSection;
  } else {
    dataObj = data?.data?.videoSection;
  }
  // Render the video section with title and video iframe.
  return (
    <div className="flex flex-col justify-center items-center bg-white p-2 w-full">
      <h2
        {...inspectorProps({ fieldId: "name" })}
        className="text-4xl font-bold p-2"
      >
        {dataObj?.name || "Video Section"}
      </h2>
      <div className="w-full max-w-2xl aspect-video">
        <iframe
          {...inspectorProps({ fieldId: "video" })}
          src={dataObj?.video?.url}
          title="Example Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-lg shadow-lg w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoSection;
