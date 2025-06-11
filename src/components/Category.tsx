import type { CategoryProps } from "../util/types";

const Category: React.FC<CategoryProps> = ({ title, logo }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-red-700 text-white rounded-md shadow-md py-5 w-[205px]">
      {logo}
      <p>{title}</p>
    </div>
  );
};

export default Category;
