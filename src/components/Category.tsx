import { useContentfulInspectorMode } from "@contentful/live-preview/react";
import type { CategoryProps } from "../util/types";

/**
 * Category component displays a category with a logo and title.
 * @param props - CategoryProps containing title, logo, and entryId.
 */
const Category: React.FC<CategoryProps> = ({ title, logo, entryId }) => {
  // Enable inspector mode for this category entry.
  const inspectorProps = useContentfulInspectorMode({ entryId });

  return (
    <div
      className="flex flex-col justify-center items-center bg-red-700 text-white rounded-md shadow-md py-5 w-[205px] hover:scale-105 hover:transition-transform hover:duration-75 hover:cursor-pointer"
      // Log the logo image when the category is clicked.
      onClick={() => console.log(`Navigate to: ${logo.props?.image}`)}
    >
      {/* Render the logo element */}
      {logo}
      {/* Render the category title with inspector mode enabled */}
      <p {...inspectorProps({ fieldId: "title" })}>{title}</p>
    </div>
  );
};

export default Category;
