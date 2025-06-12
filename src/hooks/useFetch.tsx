import { useEffect, useState } from "react";

const useFetch = <T,>(query: string) => {
  const [data, setData] = useState<T>();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContentfulData = async () => {
      setLoading(true);

      const response = await fetch(
        import.meta.env.VITE_CONTENTFUL_GRAPHQL_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
            }`,
          },
          body: JSON.stringify({ query }),
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
    error
  };
};

export default useFetch;
