import type { ContentfulImageSectionResponse } from "../util/types";
import Category from "./Category";
import { imageSectionQuery } from "../util/queries";
import Logo from "./Logo/Logo";
import useFetch from "../hooks/useFetch";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

const ImageSection: React.FC = () => {
  const { data, loading, error } =
    useFetch<ContentfulImageSectionResponse>(imageSectionQuery);

  const liveData = useContentfulLiveUpdates(data);

  const inspectorProps = useContentfulInspectorMode({
    entryId: liveData?.data.imageSectionCollection.items[0].sys.id,
  });

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  return (
    <div
      className="p-3 flex flex-wrap gap-3 justify-center items-center"
      {...inspectorProps({ fieldId: "categories" })}
    >
      {liveData &&
        liveData.data.imageSectionCollection.items[0].categoriesCollection.items.map(
          (category) => (
            <Category
              key={category.title}
              title={category.title}
              logo={
                <Logo
                  image={category.logo.image.url}
                  title={category.logo.title}
                  {...inspectorProps({ entryId: category.sys.id, fieldId: "logo" })}
                />
              }
              entryId={category.sys.id}
            />
          )
        )}
    </div>
  );
};

export default ImageSection;
