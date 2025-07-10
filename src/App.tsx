import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/product/:productSlug",
    element: <ProductPage />,
  },
]);

/**
 * The main App component that renders the landing page sections from Contentful.
 */
function App() {
  // Render the ContentfulLivePreviewProvider to enable live preview and inspector mode.
  // Dynamically render each section from Contentful using getReactComponentOfSection.

  const [isAllowed, setIsAllowed] = useState(true);

  const isLivePreview =
    new URLSearchParams(window.location.search).get("preview") === "true";

  useEffect(() => {
    if (isLivePreview) {
      document.addEventListener("contextmenu", (e) => e.preventDefault());

      const isInIframe = window.self !== window.top;

      if (!isInIframe) {
        setIsAllowed(false);
      }
    }
  }, [isLivePreview]);

  if (!isAllowed) {
    return <p>Access Denied.</p>;
  }

  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableLiveUpdates
      enableInspectorMode
      targetOrigin="https://app.contentful.com"
    >
      <RouterProvider router={router} />
    </ContentfulLivePreviewProvider>
  );
}

export default App;
