import Link from "../Link/Link";
import Links from "../Links/Links";

interface HeadingFooterProps {
  type: "heading" | "footer";
}
const HeadingFooter: React.FC<HeadingFooterProps> = ({ type }) => {
  const styles = "text-0.5xl hover:opacity-70 text-white cursor-pointer";

  return (
    <div className="flex flex-row justify-items-end items-center bg-black p-3 space-x-10 w-screen">
      {type === "heading" && (
        <Links type="single">
          <Link
            url="http://www.google.com/"
            title="Categories"
            styles={styles}
          />
          <Link
            url="http://www.google.com/"
            title="Categories"
            styles={styles}
          />
          <Link
            url="http://www.google.com/"
            title="Categories"
            styles={styles}
          />
          <Link
            url="http://www.google.com/"
            title="Categories"
            styles={styles}
          />
        </Links>
      )}
      {type === "footer" && (
        <>
          <Links type="group">
            <h2 className="text-white">Title</h2>
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
          </Links>
          <Links type="group">
            <h2 className="text-white">Title</h2>
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
          </Links>
          <Links type="group">
            <h2 className="text-white">Title</h2>
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
          </Links>
          <Links type="group">
            <h2 className="text-white">Title</h2>
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
          </Links>
          <Links type="group">
            <h2 className="text-white">Title</h2>
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
          </Links>
          <Links type="group">
            <h2 className="text-white">Title</h2>
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
          </Links>
          <Links type="group">
            <h2 className="text-white">Title</h2>
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
          </Links>
          <Links type="group">
            <h2 className="text-white">Title</h2>
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
          </Links>
          <Links type="group">
            <h2 className="text-white">Title</h2>
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
            <Link
              url="http://www.google.com/"
              title="Categories"
              styles={styles}
            />
          </Links>
        </>
      )}
    </div>
  );
};

export default HeadingFooter;
