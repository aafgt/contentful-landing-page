import type { LinksProps } from "../../../util/types";

/**
 * Links component arranges its children in a row or column based on the type.
 * @param props - LinksProps with type and children.
 */
const Links: React.FC<LinksProps> = ({ type, children }) => {
  return (
    <>
      {type === "single" && (
        <div className="flex flex-row flex-wrap justify-center items-center p-1 gap-x-6 gap-y-2 mt-2">
          {children}
        </div>
      )}
      {type === "group" && (
        <div className="flex flex-col flex-wrap justify-center items-center p-1 gap-y-10 mt-2">
          {children}
        </div>
      )}
    </>
  );
};

export default Links;
