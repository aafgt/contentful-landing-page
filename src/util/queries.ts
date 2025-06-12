export const contentSectionQuery = `
{
  contentSectionCollection(limit: 5) {
    items {
      image {
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
}
`;

export const imageSectionQuery = `
{
  imageSectionCollection(limit: 5) {
    items {
      name
      categoriesCollection(limit: 5) {
        items {
          title
          logo {
            image {
              url
            }
            url
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
      name
      cardsCollection(limit: 5) {
        items {
          title
          category
          image {
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
