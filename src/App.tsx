import ContentSection from "./components/ContentSection";
import CardSection from "./components/CardSection";
import Header from "./components/Header/Header";
import ImageSection from "./components/ImageSection";
import VideoSection from "./components/VideoSection/VideoSection";
import Footer from "./components/Footer/Footer";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

function App() {
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableLiveUpdates
      enableInspectorMode
    >
      <div className="flex flex-col h-auto">
        <Header />
        <ContentSection />
        <ImageSection />
        <CardSection />
        <VideoSection />
        <Footer />
      </div>
    </ContentfulLivePreviewProvider>
  );
}

export default App;
