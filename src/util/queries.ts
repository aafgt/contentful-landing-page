export const contentSectionQuery = (id: string) => `
query ($preview: Boolean!) {
  contentSection(id: "${id}", preview: $preview) {
    __typename
    sys {
      id
    }
    image {
      title
      url
    }
    title
    description {
      json
    }
    price
    cta {
      title
      url
    }
  }
}
`;

export const imageSectionQuery = (id: string) => `
query ($preview: Boolean!) {
  imageSection(id: "${id}", preview: $preview) {
    __typename
    sys {
      id
    }
    name
    categoriesCollection(limit: 10) {
      items {
        __typename
        sys {
          id
        }
        title
        logo {
          image {
            url
          }
          title
        }
      }
    }
  }
}
`;

export const cardsSectionQuery = (id: string) => `
query ($preview: Boolean!) {
  cardsSection(id: "${id}", preview: $preview) {
    __typename
    sys {
      id
    }
    name
    cardsCollection(limit: 10) {
      items {
        __typename
        sys {
          id
        }
        slug
      }
    }
  }
}
`;

export const cardQuery = `
query ($preview: Boolean!, $slug: String!) {
  cardCollection(preview: $preview, where: {slug: $slug}) {
    items {
      __typename
      sys {
        id
      }
      title
      category
      image {
        title
        url
      }
      cta {
        title
        url
      }
      price
    }
  }
}
`;

export const headingSectionQuery = (id: string) => `
query ($preview: Boolean!) {
  headingfooterSection(id: "${id}", preview: $preview) {
    __typename
    sys {
      id
    }
    linkCollection {
      items {
        __typename
        sys {
          id
        }
        title
        url
      }
    }
  }
}
`;

export const footingSectionQuery = (id: string) => `
query ($preview: Boolean!) {
  footer(id: "${id}", preview: $preview) {
    __typename
    sys {
      id
    }
    footersCollection {
      items {
        name
        __typename
        sys {
          id
        }
        linkCollection {
          items {
            __typename
            sys {
              id
            }
            title
            url
          }
        }
      }
    }
  }
}
`;

export const navigationSectionQuery = (id: string) => `
query ($preview: Boolean!) {
  navigation(id: "${id}", preview: $preview) {
    __typename
    sys {
      id
    }
    logo {
      __typename
      sys {
        id
      }
      image {
        url
      }
      title
    }
    linkCollection {
      items {
        __typename
        sys {
          id
        }
        title
        url
      }
    }
  }
}
`;

export const heroBannerQuery = (id: string) => `
query ($preview: Boolean!) {
  heroBanner(id: "${id}", preview: $preview) {
    __typename
    sys {
      id
    }
    title
    image {
      url
    }
  }
}
`;

export const videoSectionQuery = (id: string) => `
query ($preview: Boolean!) {
  videoSection(id: "${id}", preview: $preview) {
    __typename
    sys {
      id
    }
    name
    video {
      url
    }
  }
}
`;

export const landingPageQuery = `
query ($preview: Boolean!) {
  landingPageCollection(preview: $preview) {
    items {
      sectionsCollection {
				items {
          __typename
          ...on Header {
            sys {
              id
            }
          }
          ...on ContentSection{
            sys {
              id
            }
          }
          ...on ImageSection {
            sys {
              id
            }
          }
          ...on CardsSection {
            sys {
              id
            }
          }
          ...on VideoSection {
            sys {
              id
            }
          }
          ...on Footer {
            sys {
              id
            }
          }
        }
      }
    }
  }
}
`;

export const headerQuery = (id: string) => `
query ( $preview: Boolean!) {
  header(id: "${id}" , preview:$preview){
    heading{
      sys{
        id
      }
    }
    navigation{
      sys{
        id
      }
    }
    heroBanner{
      sys{
        id
      }
    }
  }
}
`;
