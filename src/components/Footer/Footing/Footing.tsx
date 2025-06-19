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

const Footing = () => {
  const styles = "text-0.5xl hover:opacity-70 text-white cursor-pointer";
  const { data, loading, error } =
    useFetch<ContentfulFootingSectionResponse>(footingSectionQuery);
  const inspectorProps = useContentfulInspectorMode({entryId: data?.data?.footer?.sys.id})
  let liveData = useContentfulLiveUpdates(data);
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  const dataArr: FootingCategoryProps[] =
    liveData?.data?.footer?.footersCollection?.items || [];
  return (
    <div {...inspectorProps({fieldId: "footers"})} className="flex flex-row justify-items-end items-center bg-black p-1  space-x-10 w-screen">
      {dataArr &&
        dataArr.map((category) => (
          <Links type="group">
            <h2 className="text-white">{category.name}</h2>
            {category.linkCollection?.items?.map((item: FootingProps) => (
              <Link key={item.title} url={item.url} title={item.title} styles={styles} />
            ))}
          </Links>
        ))}
    </div>
  );
};
export default Footing;
