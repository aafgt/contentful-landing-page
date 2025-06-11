interface LinksProps {
  type: "single" | "group";
  children: React.ReactNode;
}

const Links: React.FC<LinksProps> = ({ type, children }) => {
  return (
    <>
      {type === "single" && (
        <div className="flex flex-row justify-center items-center p-1 space-x-10 mt-2">
          {children}
        </div>
      )}
      {type === "group" && (
        <div className="flex flex-col justify-center items-center p-1 space-y-10 mt-2">
          {children}
        </div>
      )}
    </>
  );
};

export default Links;
