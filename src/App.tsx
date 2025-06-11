import HeadingFooter from "./components/Header/Heading-Footer/HeadingFooter";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="flex flex-col h-auto ">
      <Header />
      <HeadingFooter type="footer" />
    </div>
  );
}

export default App;
