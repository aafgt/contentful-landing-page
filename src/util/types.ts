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
  entryId: string;
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
  entryId: string;
}

export interface ImageSectionProps {
  name: string;
  category: CategoryProps[];
}

export interface HeadingProps {
  title: string;
  url: string;
}

export interface FootingProps {
  title: string;
  url: string;
}

export interface FootingCategoryProps {
  name: string;
  linkCollection: {
    items: FootingProps[];
  };
}

export interface NavigationProps {
  title: string;
  url: string;
}
export interface ContentfulContentSectionResponse {
  errors?: object[];
  data: {
    contentSectionCollection: {
      items: {
        __typename: string;
        sys: { id: string };
        image: string;
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
        __typename: string;
        sys: { id: string };
        name: string;
        categoriesCollection: {
          items: {
            __typename: string;
            sys: { id: string };
            title: string;
            logo: {
              image: string;
              title: string;
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
        __typename: string;
        sys: { id: string };
        name: string;
        cardsCollection: {
          items: {
            __typename: string;
            sys: { id: string };
            title: string;
            category: string;
            price: number;
            image: string;
            cta: { title: string; url: string };
          }[];
        };
      }[];
    };
  };
}

export interface ContentfulHeadingSectionResponse {
  errors?: object[];
  data: {
    headingfooterSection: {
      linkCollection: {
        items: {
          title: string;
          url: string;
        }[];
      };
    };
  };
}

export interface ContentfulFootingSectionResponse {
  errors?: object[];
  data: {
    footer: {
      footersCollection: {
        items: {
          name: string;
          linkCollection: {
            items: {
              title: string;
              url: string;
            }[];
          };
        }[];
      };
    };
  };
}

export interface ContentfulNavigationResponse {
  errors?: object[];
  data: {
    navigation: {
      logo: {
        image: {
          url: string;
        };
      };
      linkCollection: {
        items: {
          title: string;
          url: string;
        }[];
      };
    };
  };
}

export interface ContentfulHeroBannerResponse {
  errors?: object[];
  data: {
    heroBanner: {
      title: string;
      image: {
        url: string;
      };
    };
  };
}

export interface ContentfulVideoSectionResponse {
  errors?: object[];
  data: {
    videoSection: {
      video: {
        title: string;
        url: string;
        width: number;
        height: number;
      };
    };
  };
}
