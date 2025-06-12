import Link from "../Link/Link";
import Logo from "../../Logo/Logo";
import Links from "../Links/Links";
import useFetch from "../../../hooks/useFetch";
import { NavigationSectionQuery } from "../../../util/queries";
import type {
  ContentfulNavigationResponse,
  NavigationProps,
} from "../../../util/types";

const Navigation: React.FC = () => {
  const styles =
    "font-bold text-2xl hover:scale-110 hover:text-red-500 cursor-pointer";
  const { data, loading, error } = useFetch<ContentfulNavigationResponse>(
    NavigationSectionQuery
  );
  let dataArr: NavigationProps[] = [];
  let logoUrl: string = "";
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }
  if (data) {
    logoUrl = data?.data?.navigation?.logo.image?.url;
    dataArr = data?.data?.navigation?.linkCollection?.items;
  }
  return (
    <div className="flex flex-row bg-white shadow-xl items-start space-x-10 p-2">
      <Logo url={logoUrl} image="" />
      <Links type="single">
        {dataArr &&
          dataArr.map((item: NavigationProps) => (
            <Link title={item.title} url={item.url} styles={styles} />
          ))}
      </Links>
    </div>
  );
};

export default Navigation;
