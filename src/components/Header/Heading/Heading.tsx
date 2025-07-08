import Link from "../Link/Link";
import { headingSectionQuery } from "../../../util/queries";
import useFetch from "../../../hooks/useFetch";
import type {
  ContentfulHeadingSectionResponse,
  HeadingProps,
} from "../../../util/types";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

/**
 * Heading component displays navigation links at the top of the page.
 * @param id - The Contentful entry id for the heading section.
 */
const Heading = ({ id }: { id: string }) => {
  // Styles for the heading links.
  const styles = "text-0.5xl hover:opacity-70 text-white cursor-pointer";
  // Fetch heading section data from Contentful.
  const { data, loading, error } =
    useFetch<ContentfulHeadingSectionResponse>(headingSectionQuery(id));
  // Get live updates from Contentful if enabled.
  let liveData = useContentfulLiveUpdates(data);
  // Enable inspector mode for the heading section entry.
  const inspectorProps = useContentfulInspectorMode({
    entryId: data?.data?.headingfooterSection?.sys.id,
  });
  let dataArr: HeadingProps[] = [];

  // Show loading state.
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }
  // Show error message if fetching fails.
  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }
  // Get the array of heading links.
  if (liveData) {
    dataArr = liveData?.data?.headingfooterSection?.linkCollection?.items || [];
  } else {
    dataArr = data?.data?.headingfooterSection?.linkCollection?.items || [];
  }
  // Render the heading links using the Links and Link components.
  return (
  <div {...inspectorProps({ fieldId: "link" })} className="bg-black p-2 rounded-t-lg">
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 p-1">
      {dataArr &&
        dataArr.map((item: HeadingProps) => (
          <Link
            key={item.title}
            url={item.url}
            title={item.title}
            styles={styles}
          />
        ))}
    </div>
  </div>
);
};

export default Heading;
