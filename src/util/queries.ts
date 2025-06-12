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
