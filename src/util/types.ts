export interface CTAProps {
  title: string;
  url: string;
  className?: string;
}

export interface ContentSectionProps {
  image: string;
  title: string;
  description: string;
  price: number;
  cta: React.ReactNode;
}

export interface CardProps {
  title: string;
  category: string;
  image: string;
  cta: React.ReactNode;
  price: number;
}

export interface CardSectionProps {
  name: string;
  cards: CardProps[];
}

interface LogoProps {
  url: string;
  image: string;
}

export interface CategoryProps {
  title: string;
  logo: React.ReactElement<LogoProps>;
}

export interface ImageSectionProps {
  name: string;
  category: CategoryProps[];
}

export interface ContentfulContentSectionResponse {
  errors?: object[];
  data: {
    contentSectionCollection: {
      items: {
        image: { url: string };
        title: string;
        description: { json: any };
        price: number;
        cta: { title: string; url: string };
      }[];
    };
  };
}

export interface ContentfulImageSectionResponse {
  errors?: object[];
  data: {
    imageSectionCollection: {
      items: {
        name: string;
        categoriesCollection: {
          items: {
            title: string;
            logo: {
              image: {
                url: string;
              };
              url: string;
            };
          }[];
        };
      }[];
    };
  };
}

export interface ContentfulCardsSectionResponse {
  errors?: object[];
  data: {
    cardsSectionCollection: {
      items: {
        name: string;
        cardsCollection: {
          items: {
            title: string;
            category: string;
            price: number;
            image: { url: string };
            cta: { title: string; url: string };
          }[];
        };
      }[];
    };
  };
}
