import type { ImageSectionProps } from "../util/types";
import Category from "./Category";

const ImageSection: React.FC<ImageSectionProps> = ({ name, category }) => {
  return (
    <div className="p-3 flex flex-wrap gap-3 justify-center items-center">
      {false && { name }}
      {category.map((c) => (
        <Category title={c.title} logo={c.logo} />
      ))}
    </div>
  );
};

export default ImageSection;
