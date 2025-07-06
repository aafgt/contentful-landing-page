import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * Custom React hook to fetch data from Contentful GraphQL API.
 * Handles both live preview and production modes.
 *
 * @template T - The expected data type of the response.
 * @param query - The GraphQL query string to execute.
 * @returns An object containing the data, loading state, and error message.
 */
const useFetch = <T,>(query: string, slug?: string) => {

  const params = useParams();
  const productSlug = slug || params.productSlug || "";

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

  useEffect(() => {
    // Fetch data from Contentful GraphQL API.
    const fetchContentfulData = async () => {
      setLoading(true);

      const response = await fetch(
        import.meta.env.VITE_CONTENTFUL_GRAPHQL_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            query,
            variables: { preview: isLivePreview, slug: productSlug },
          }),
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
