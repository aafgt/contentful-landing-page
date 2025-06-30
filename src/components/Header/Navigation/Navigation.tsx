import Link from "../Link/Link";
import Logo from "../../Logo/Logo";
import Links from "../Links/Links";
import useFetch from "../../../hooks/useFetch";
import type {
  ContentfulNavigationResponse,
  NavigationProps,
} from "../../../util/types";
import { useContentfulInspectorMode, useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { navigationSectionQuery } from "../../../util/queries";

/**
 * Navigation component displays the logo and navigation links.
 * @param id - The Contentful entry id for the navigation section.
 */
const Navigation = ({id}:{id:string}) => {
  const styles =
    "font-bold text-2xl hover:scale-110 hover:text-red-500 cursor-pointer";
  const { data, loading, error } = useFetch<ContentfulNavigationResponse>(
    navigationSectionQuery(id)
  );
  let liveData = useContentfulLiveUpdates(data);
  const inspectorProps = useContentfulInspectorMode({entryId:data?.data?.navigation?.sys.id})
  let dataArr: NavigationProps[] = [];
  let logoUrl = "";
  let logoTitle = "";
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }
  if (liveData) {
    logoUrl = liveData?.data?.navigation?.logo?.image.url || "";
    logoTitle = liveData?.data?.navigation?.logo?.title || "";
    dataArr = liveData?.data?.navigation?.linkCollection?.items || [];
  } else {
    logoUrl = data?.data?.navigation?.logo?.image?.url || "";
    logoTitle = data?.data?.navigation?.logo?.title || "";
    dataArr = data?.data?.navigation?.linkCollection?.items || [];
  }
  return (
    <div {...inspectorProps({ fieldId: "links" })} className="flex flex-row bg-white shadow-xl items-start space-x-10 p-2">
      <Logo image={logoUrl} title={logoTitle} />
      <Links type="single">
        {dataArr &&
          dataArr.map((item: NavigationProps) => (
            <Link title={item?.title} url={item?.url} styles={styles} />
          ))}
      </Links>
    </div>
  );
};

export default Navigation;
