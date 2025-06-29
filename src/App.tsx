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

/**
 * Returns the React component for a given section type and id.
 * @param sectionTypeName - The Contentful section typename.
 * @param sectionId - The Contentful section id.
 */
function getReactComponentOfSection(sectionTypeName: string, sectionId: string) {
  // This function maps Contentful section type names to React components.
  // It allows dynamic rendering of different section types based on Contentful data.
  switch (sectionTypeName) {
    case "Header":
      return <Header id={sectionId} />;
    case "ContentSection":
      return <ContentSection id={sectionId} />;
    case "ImageSection":
      return <ImageSection id={sectionId} />;
    case "CardsSection":
      return <CardSection id={sectionId} />;
    case "VideoSection":
      return <VideoSection id={sectionId} />;
    case "Footer":
      return <Footer id={sectionId} />;
    default:
      // If the section type is not recognized, return null (renders nothing).
      return null;
  }
}

/**
 * The main App component that renders the landing page sections from Contentful.
 */
function App() {
  // Fetch landing page data from Contentful using the custom hook.
  const { data, loading, error } =
    useFetch<ContentfulLandingPageResponse>(landingPageQuery);

  // Show loading state while fetching data.
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Show error message if fetching fails.
  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  // Render the ContentfulLivePreviewProvider to enable live preview and inspector mode.
  // Dynamically render each section from Contentful using getReactComponentOfSection.
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
