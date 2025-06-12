import { contentSectionQuery } from "../util/queries";
import CTA from "./CTA";
import useFetch from "../hooks/useFetch";
import type { ContentfulContentSectionResponse } from "../util/types";

const ContentSection: React.FC = () => {
  const { data, loading, error } =
    useFetch<ContentfulContentSectionResponse>(contentSectionQuery);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  return (
    <div className="flex p-5 rounded-md shadow-md w-full h-fit">
      <div className="w-1/2">
        <img
          src={data?.data.contentSectionCollection.items[0].image?.url}
          alt="image"
          width={300}
          height={300}
        />
      </div>
      <div className="w-1/2 space-y-3">
        <h5 className="text-3xl font-light">
          {data?.data.contentSectionCollection.items[0].title}
        </h5>
        <p className="text-xl font-light">
          {
            data?.data.contentSectionCollection.items[0].description.json
              .content[0].content[0].value
          }
        </p>
        <p className="text-3xl font-semibold">
          Ab einmal {data?.data.contentSectionCollection.items[0].price} €
        </p>

        <CTA
          title={data?.data.contentSectionCollection.items[0].cta.title || ""}
          url={data?.data.contentSectionCollection.items[0].cta.url || ""}
          className="bg-red-500 text-white text-xl font-normal rounded-md px-4 py-2 hover:cursor-pointer hover:bg-red-700"
        />
      </div>
    </div>
  );
};

export default ContentSection;
