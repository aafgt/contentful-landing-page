import Link from "../../Header/Link/Link";
import Links from "../../Header/Links/Links";
import { footingSectionQuery } from "../../../util/queries";
import useFetch from "../../../hooks/useFetch";
import type {
  ContentfulFootingSectionResponse,
  FootingCategoryProps,
  FootingProps,
} from "../../../util/types";
import { useContentfulInspectorMode, useContentfulLiveUpdates } from "@contentful/live-preview/react";

/**
 * Footing component displays footer Content entry and their links.
 * @param id - The Contentful entry id for the footer section.
 */
const Footing = ({ id }: { id: string }) => {
  // Styles for the footer links.
  const styles = "text-0.5xl hover:opacity-70 text-white cursor-pointer";
  // Fetch footer data from Contentful.
  const { data, loading, error } =
    useFetch<ContentfulFootingSectionResponse>(footingSectionQuery(id));
  // Enable inspector mode for the footer entry.
  const inspectorProps = useContentfulInspectorMode({
    entryId: data?.data?.footer?.sys.id,
  });
  // Get live updates from Contentful if enabled.
  let liveData = useContentfulLiveUpdates(data);
  // Show loading state.
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Show error message if fetching fails.
  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  // Get the array of footer categories.
  const dataArr: FootingCategoryProps[] =
    liveData?.data?.footer?.footersCollection?.items || [];
  // Render each category and its links.
  return (
    <div
      {...inspectorProps({ fieldId: "footers" })}
      className="flex flex-row justify-items-end items-center bg-black p-1  space-x-10 w-screen"
    >
      {dataArr &&
        dataArr.map((category) => (
          <Links type="group">
            <h2 className="text-white">{category.name}</h2>
            {category.linkCollection?.items?.map((item: FootingProps) => (
              <Link
                key={item.title}
                url={item.url}
                title={item.title}
                styles={styles}
              />
            ))}
          </Links>
        ))}
    </div>
  );
};
export default Footing;
