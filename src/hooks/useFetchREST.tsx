import { useEffect, useState } from "react";

/**
 * Custom React hook to fetch data from Contentful GraphQL API.
 * Handles both live preview and production modes.
 *
 * @template T - The expected data type of the response.
 * @param query - The GraphQL query string to execute.
 * @returns An object containing the data, loading state, and error message.
 */
const useFetch = <T,>(id?: string) => {
  // State for the fetched data.
  const [data, setData] = useState<T>();

  // State for loading and error.
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Determine if the request is for live preview mode
  // based on the URL query parameter 'preview' that is determined from the Content Preview URL.
  const isLivePreview =
    new URLSearchParams(window.location.search).get("preview") === "true";

  // Choose the correct Contentful access token based on preview mode.
  const accessToken = isLivePreview
    ? import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  const apiURL = isLivePreview
  ? import.meta.env.VITE_CONTENTFUL_PREVIEW_API
  : import.meta.env.VITE_CONTENTFUL_DELIVERY_API  

  useEffect(() => {
    // Fetch data from Contentful GraphQL API.
    const fetchContentfulData = async () => {
      setLoading(true);

      const response = await fetch(
        apiURL+`/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/${import.meta.env.VITE_CONTENTFUL_ENVIRONMENT}/entries/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Handle HTTP errors.
      if (!response.ok) {
        setError(`A ${response.status} error occurred...`);
        setLoading(false);
        return;
      }

      // Parse and store the response data.
      const data = await response.json();
      setData(data);

      setLoading(false);
    };

    fetchContentfulData();
  }, []);

  // Return the data, loading, and error states.
  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
