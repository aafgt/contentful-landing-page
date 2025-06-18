export const contentSectionQuery = `
{
  contentSectionCollection(limit: 5) {
    items {
      __typename
      sys {
        id
      }
      image
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
}
`;

export const imageSectionQuery = `
{
  imageSectionCollection(limit: 5) {
    items {
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
            image
            title
          }
        }
      }
    }
  }
}
`;

export const cardsSectionQuery = `
{
  cardsSectionCollection(limit: 5) {
    items {
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
          image
          cta {
            title
            url
          }
          price
        }
      }
    }
  }
}
`;

export const headingSectionQuery = `
{
  headingfooterSection(id:"sXqIhTr4f7cCweVeE58kb"){
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
    video
  }
}`;
