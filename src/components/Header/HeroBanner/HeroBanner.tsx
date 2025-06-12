import type React from "react";
import useFetch from "../../../hooks/useFetch";
import type { ContentfulHeroBannerResponse } from "../../../util/types";
import { HeroBannerQuery } from "../../../util/queries";



const HerroBanner: React.FC = () => {
  const { data, error, loading } =
    useFetch<ContentfulHeroBannerResponse>(HeroBannerQuery);
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  const title = data?.data?.heroBanner?.title;
  const imgUrl = data?.data?.heroBanner?.image?.url

  return (
    <>
        <img
          src={imgUrl}
          alt={title}
          className="w-screen min-h-[200px] max-h-[300px] object-center rounded-2xl"
        />
      
    </>
  );
};

export default HerroBanner;
