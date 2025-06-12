import useFetch from "../../hooks/useFetch";
import { VideoSectionQuery } from "../../util/queries";
import type { ContentfulVideoSectionResponse } from "../../util/types";

const VideoSection = () => {
  const { data, error, loading } = useFetch<ContentfulVideoSectionResponse>(VideoSectionQuery);
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }
  const dataArr = data?.data?.videoSection?.video;
  return (
    <div className="flex flex-col justify-center items-center bg-white p-2">
      <h2 className="text-4xl font-bold p-2">{dataArr?.title || "Video Section"}</h2>
      <iframe
        width={dataArr?.width}
        height={dataArr?.height}
        src={dataArr?.url}
        title={dataArr?.title}
        className="rounded-lg shadow-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
