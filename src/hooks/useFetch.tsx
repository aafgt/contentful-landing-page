import { useEffect, useState } from "react";

/**
 * Custom React hook to fetch data from Contentful GraphQL API.
 * Handles both live preview and production modes.
 *
 * @template T - The expected data type of the response.
 * @param query - The GraphQL query string to execute.
 * @returns An object containing the data, loading state, and error message.
 */
const useFetch = <T,>(query: string) => {
  const [data, setData] = useState<T>();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Determine if the request is for live preview mode
  // based on the URL query parameter 'preview' that is determined from the Content Preview URL.
  const isLivePreview =
    new URLSearchParams(window.location.search).get("preview") === "true";

  const accessToken = isLivePreview
    ? import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  useEffect(() => {
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
            variables: { preview: isLivePreview },
          }),
        }
      );

      if (!response.ok) {
        setError(`A ${response.status} error occurred...`);
        setLoading(false);
        return;
      }

      const data = await response.json();
      setData(data);

      setLoading(false);
    };

    fetchContentfulData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
