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
  // Fetch header data from Contentful.
  const { data, loading, error } =
    useFetch<ContentfulHeaderRespones>(headerQuery(id));

  // Show loading state.
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  // Show error message if fetching fails.
  if (error) {
    return <p className="text-red-700 font-bold text-center">{error}</p>;
  }

  // Render the Heading, Navigation, and HeroBanner components if their ids are present.
  return (
  <>
    <div className="w-full flex flex-col items-center overflow-x:hidden">
      <div className="max-w-7xl w-full mx-auto flex flex-col">
        {data?.data?.header?.heading?.sys.id && (
          <Heading id={data.data.header.heading.sys.id} />
        )}
        {data?.data?.header?.navigation?.sys.id && (
          <Navigation id={data.data.header.navigation.sys.id} />
        )}
      </div>
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
