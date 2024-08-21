export const queryFooter = `
query Footer {
  footer {
    footerNavigation {
      navigationLabel
      id
      page {
        ... on HomePageRecord {
          id
          slug
        }
        ... on BlogsPageRecord {
          id
          slug
        }
        ... on AboutPageRecord {
          id
          slug
        }
      }
    }
  }
}`;
