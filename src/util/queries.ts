export const contentSectionQuery = (id: string) => `
query ($preview: Boolean!) {
  contentSection(id: "${id}", preview: $preview) {
      __typename
      sys {
        id
      }
      image {
        title,
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
      categoriesCollection(limit: 5) {
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
      cardsCollection(limit: 5) {
        items {
          __typename
          sys {
            id
          }
          title
          category
          image {
            title,
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
}
`;

export const headingSectionQuery = `
query ($preview: Boolean!) {
  headingfooterSection(id:"sXqIhTr4f7cCweVeE58kb", preview: $preview){
    __typename
    sys{ id }
    linkCollection{
      items{
        __typename
        sys{ id }
        title
        url
      }
    }
  }
} 
`;

// query ($preview: Boolean!) {
//   header(id:"5m3QGDZcxeve7JxfHgHgdJ", preview: $preview){
//     __typename
//     sys{ id }
//     heading {
//       name
//     }
//     navigation {
//       logo {
//         title
//       }
//       linkCollection {
//         items {
// 					title
//         }
//       }
//     }
//     heroBanner {
//       title
//     }
//   }
// } 

export const footingSectionQuery = `
 {
  footer(id:"3rGZLS3dmwRFF5vdTAT7U9"){
  __typename
      sys { id }
    footersCollection{
      items{
        name
          __typename
      sys { id }
        linkCollection{
          items{
            __typename
      sys { id }
            title
            url
          }
        }
      }
    }
  }
}

`;

export const NavigationSectionQuery = `
{
  navigation(id:"SBWx8jpuLNrm9EwVM64it"){
    __typename
    sys{
      id
    }
    logo{
      __typename
      sys{
        id
      }
      image{
      url
      }
      title
    }
    linkCollection{
      items{
        __typename
        sys{
          id
        }
        title
        url
        
      }
    }
  }
    }`;

export const HeroBannerQuery = `
{
heroBanner(id:"34kL5gwgZ4EPk1oO6wE4TF"){
    __typename
    sys{
      id
    }
    __typename
    sys{
      id
    }
    title
    image{
    url
    }
  }
}`;

export const VideoSectionQuery = `
{
  videoSection(id:"4zsfyTLRwEvPw6npIOx1d0"){
    __typename
    sys{
      id
    }
    name
    video{
    url
    }
  }
}`;

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
