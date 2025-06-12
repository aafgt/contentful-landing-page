import type { ContentfulImageSectionResponse } from "../util/types";
import Category from "./Category";
import { imageSectionQuery } from "../util/queries";
import Logo from "./Logo/Logo";
import useFetch from "../hooks/useFetch";

const ImageSection: React.FC = () => {
  const { data, loading, error } =
    useFetch<ContentfulImageSectionResponse>(imageSectionQuery);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  return (
    <div className="p-3 flex flex-wrap gap-3 justify-center items-center">
      {data &&
        data.data.imageSectionCollection.items[0].categoriesCollection.items.map(
          (category) => (
            <Category
              key={category.title}
              title={category.title}
              logo={
                <Logo
                  image={category.logo.image?.url}
                  url={category.logo.url}
                />
              }
            />
          )
        )}
    </div>
  );
};

export default ImageSection;
