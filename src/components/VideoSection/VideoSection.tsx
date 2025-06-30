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
  const { data, error, loading } = useFetch<ContentfulVideoSectionResponse>(
    videoSectionQuery(id)
  );

  let dataObj: VideoSectionProps | undefined;
  let liveData = useContentfulLiveUpdates(data);
  const inspectorProps = useContentfulInspectorMode({
    entryId: data?.data.videoSection.sys.id,
  });

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  if (liveData) {
    dataObj = liveData?.data?.videoSection;
  } else {
    dataObj = data?.data?.videoSection;
  }
  return (
    <div className="flex flex-col justify-center items-center bg-white p-2">
      <h2
        {...inspectorProps({ fieldId: "name" })}
        className="text-4xl font-bold p-2"
      >
        {dataObj?.name || "Video Section"}
      </h2>
      <iframe
        {...inspectorProps({ fieldId: "video" })}
        width={720}
        height={480}
        src={dataObj?.video?.url}
        title="Example Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default VideoSection;
