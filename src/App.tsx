import ContentSection from "./components/ContentSection";
import CardSection from "./components/CardSection";
import Header from "./components/Header/Header";
import ImageSection from "./components/ImageSection";
import VideoSection from "./components/VideoSection/VideoSection";
import Footer from "./components/Footer/Footer";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import useFetch from "./hooks/useFetch";
import { landingPageQuery } from "./util/queries";
import type { ContentfulLandingPageResponse } from "./util/types";

function getReactComponentOfSection(sectionTypeName: string, sectionId: string) {
  switch (sectionTypeName) {
    case "Header":
      return <Header />;
    case "ContentSection":
      return <ContentSection id={sectionId} />;
    case "ImageSection":
      return <ImageSection id={sectionId} />;
    case "CardsSection":
      return <CardSection id={sectionId} />;
    case "VideoSection":
      return <VideoSection />;
    case "Footer":
      return <Footer />;
    default:
      return null;
  }
}

function App() {
  const { data, loading, error } =
    useFetch<ContentfulLandingPageResponse>(landingPageQuery);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableLiveUpdates
      enableInspectorMode
    >
      <div className="flex flex-col h-auto">
        {data?.data.landingPageCollection.items[0].sectionsCollection.items.map(
          (section) => getReactComponentOfSection(section.__typename, section.sys.id)
        )}
      </div>
    </ContentfulLivePreviewProvider>
  );
}

export default App;
