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
    linkCollection{
      items{
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
    footersCollection{
      items{
        name
        linkCollection{
          items{
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
    logo{
      image{
        url
      }
    }
    linkCollection{
      items{
        title
        url
      }
    }
  }
    }`;

export const HeroBannerQuery = `
{
   heroBanner(id:"34kL5gwgZ4EPk1oO6wE4TF"){
    title
    image{
      url
    }
  }
}`;

export const VideoSectionQuery = `
{
   videoSection(id:"4zsfyTLRwEvPw6npIOx1d0"){
    video{
      title
      url
      width
      height
    }
  }
}`;
