import ContentSection from "./components/ContentSection";
import CTA from "./components/CTA";
import ReactLogo from "./assets/react.svg";
import CardSection from "./components/CardSection";
import Header from "./components/Header/Header";
import ImageSection from "./components/ImageSection";
import Logo from "./components/Logo/Logo";
import VideoSection from "./components/VideoSection/VideoSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col h-auto">
      <Header />

      <ContentSection
        image={ReactLogo}
        title="iPhone 16 Pro. Entwickelt für Apple Intelligence. AirPods 4 geschenkt."
        description="Dazu gibt's 200 € Willkommensbonus und unbegrenztes Datenvolumen – z.B. im Tarif GigaMobil Young M. Nur bis 16. Juli. Und nur für Neukund:innen."
        price={1}
        cta={
          <CTA
            title="Zum iPhone 16 Pro"
            url="https://www.google.com"
            className="bg-red-500 text-white text-xl font-normal rounded-md px-4 py-2 hover:cursor-pointer hover:bg-red-700"
          />
        }
      />

      <ImageSection
        name=""
        category={[
          {
            title: "one",
            logo: <Logo image={ReactLogo} url="https://www.google.com" />,
          },
          {
            title: "two",
            logo: <Logo image={ReactLogo} url="https://www.google.com" />,
          },
          {
            title: "three",
            logo: <Logo image={ReactLogo} url="https://www.google.com" />,
          },
          {
            title: "four",
            logo: <Logo image={ReactLogo} url="https://www.google.com" />,
          },
          {
            title: "five",
            logo: <Logo image={ReactLogo} url="https://www.google.com" />,
          },
          {
            title: "six",
            logo: <Logo image={ReactLogo} url="https://www.google.com" />,
          },
        ]}
      />

      <CardSection
        name="Angebote für Dich"
        cards={[
          {
            title: "Google Pixel 9 und Pixel 9 Pro mit gratis Pixel Buds Pro 2",
            category: "Nur bis 18. Juni",
            image: ReactLogo,
            cta: (
              <CTA
                title="Google Pixel aussuchen >"
                url="https://www.google.com"
                className="text-red-700 hover:underline hover:cursor-pointer"
              />
            ),
            price: 1,
          },
          {
            title: "Hol Dir bestes TV-Entertainment mit GigaTV",
            category: "TV für zuhause & unterwegs",
            image: ReactLogo,
            cta: (
              <CTA
                title="Zum GigaTV-Angebot >"
                url="https://www.google.com"
                className="text-red-700 hover:underline hover:cursor-pointer"
              />
            ),
            price: 9.99,
          },
        ]}
      />

      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
