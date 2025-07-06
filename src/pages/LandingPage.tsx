import CardSection from "../components/CardSection";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ImageSection from "../components/ImageSection";
import VideoSection from "../components/VideoSection/VideoSection";
import useFetch from "../hooks/useFetch";
import { landingPageQuery } from "../util/queries";
import type { ContentfulLandingPageResponse } from "../util/types";

/**
 * Returns the React component for a given section type and id.
 * @param sectionTypeName - The Contentful section typename.
 * @param sectionId - The Contentful section id.
 */
function getReactComponentOfSection(
  sectionTypeName: string,
  sectionId: string
) {
  // This function maps Contentful section type names to React components.
  // It allows dynamic rendering of different section types based on Contentful data.
  switch (sectionTypeName) {
    case "Header":
      return <Header key={sectionId} id={sectionId} />;
    case "ContentSection":
      return <ContentSection key={sectionId} id={sectionId} />;
    case "ImageSection":
      return <ImageSection key={sectionId} id={sectionId} />;
    case "CardsSection":
      return <CardSection key={sectionId} id={sectionId} />;
    case "VideoSection":
      return <VideoSection key={sectionId} id={sectionId} />;
    case "Footer":
      return <Footer key={sectionId} id={sectionId} />;
    default:
      // If the section type is not recognized, return null (renders nothing).
      return null;
  }
}

const LandingPage = () => {
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
  return (
    <div className="flex flex-col h-auto w-auto overflow-x-hidden ">
      {data?.data.landingPageCollection.items[0].sectionsCollection.items.map(
        (section) =>
          getReactComponentOfSection(section?.__typename, section?.sys.id)
      )}
    </div>
  );
};

export default LandingPage;
