import Link from "../Link/Link";
import Links from "../Links/Links";
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

const Heading = () => {
  const styles = "text-0.5xl hover:opacity-70 text-white cursor-pointer";
  const { data, loading, error } =
    useFetch<ContentfulHeadingSectionResponse>(headingSectionQuery);
  let liveData = useContentfulLiveUpdates(data);
  const inspectorProps = useContentfulInspectorMode({
    entryId: data?.data?.headingfooterSection?.sys.id,
  });
  let dataArr: HeadingProps[] = [];

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }
  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }
  if (liveData) {
    dataArr = liveData?.data?.headingfooterSection?.linkCollection?.items || [];
  } else {
    dataArr = data?.data?.headingfooterSection?.linkCollection?.items || [];
  }
  return (
    <div {...inspectorProps({ fieldId: "link" })} className="flex flex-row justify-items-end items-center bg-black p-1  space-x-10 w-screen">
      <Links  type="single">
        {dataArr &&
          dataArr.map((item: HeadingProps) => (
            <Link
              key={item.title}
              url={item.url}
              title={item.title}
              styles={styles}
            />
          ))}
      </Links>
    </div>
  );
};

export default Heading;
