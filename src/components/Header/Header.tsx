import HerroBanner from "./HeroBanner/HeroBanner";
import Navigation from "./Navigation/Navigation";
import Heading from "./Heading/Heading";
import useFetch from "../../hooks/useFetch";
import { headerQuery } from "../../util/queries";
import type { ContentfulHeaderRespones } from "../../util/types";
/**
 * Header component renders the heading, navigation, and hero banner Content entries.
 * @param id - The Contentful entry id for the header.
 */
const Header = ({ id }: { id: string }) => {
  const { data, loading, error } =
    useFetch<ContentfulHeaderRespones>(headerQuery(id));

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  return (
  <>
    <div className="fixed">
      {data?.data?.header?.heading?.sys.id && (
        <Heading id={data.data.header.heading.sys.id} />
      )}
      {data?.data?.header?.navigation?.sys.id && (
        <Navigation id={data.data.header.navigation.sys.id} />
      )}
    </div>
    <div>
      {data?.data?.header?.heroBanner?.sys.id && (
        <HerroBanner id={data.data.header.heroBanner.sys.id} />
      )}
    </div>
  </>
);
};

export default Header;
