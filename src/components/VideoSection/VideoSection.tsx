const VideoSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-2">
      <h2 className="text-4xl font-bold p-2">Video Section</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-J1iA4mEHtU?si=m38f9UmthRCFrw5f"
        title="YouTube video player"
        className="rounded-lg shadow-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
