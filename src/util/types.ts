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
  imageAlt: string;
  cta: React.ReactNode;
  price: number;
  entryId: string;
}

export interface CardSectionProps {
  name: string;
  cards: CardProps[];
}

export interface LogoProps {
  title: string;
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
export interface VideoSectionProps {
  name: string;
  video: {
    url:string
  }
}

export interface HeroBannerProps {
  title: string;
  image:{
    url:string;
  }
}
export interface ContentfulContentSectionResponse {
  errors?: object[];
  data: {
    contentSectionCollection: {
      items: {
        __typename: string;
        sys: { id: string };
        image: {
          title: string;
          url: string;
        };
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
              image: {
                url: string;
              };
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
            image: {
              title: string;
              url: string;
            };
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
      sys: { id: string };
      linkCollection: {
        items: {
          sys: { id: string };
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
      sys: { id: string };
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
      sys: {
        id: string;
      };
      logo: {
        title: string;
        image:{
          url:string
        }
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
      sys: {
        id: string;
      };
      title: string;
      image:{
        url:string
      }
    };
  };
}

export interface ContentfulVideoSectionResponse {
  errors?: object[];
  data: {
    videoSection: {
      sys: {
        id: string;
      };
      name: string;
      video:{
        url:string
      }
    };
  };
}
