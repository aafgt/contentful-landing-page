import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";

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
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableLiveUpdates
      enableInspectorMode
    >
      <RouterProvider router={router} />
    </ContentfulLivePreviewProvider>
  );
}

export default App;
