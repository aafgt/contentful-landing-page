import type { CategoryProps } from "../util/types";

const Category: React.FC<CategoryProps> = ({ title, logo }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-red-700 text-white rounded-md shadow-md py-5 w-[205px] hover:scale-105 hover:transition-transform hover:duration-75 hover:cursor-pointer" onClick={() => console.log(`Navigate to: ${logo.props?.url}`)}>
      {logo}
      <p>{title}</p>
    </div>
  );
};

export default Category;
