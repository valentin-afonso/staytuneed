export const queryHeader = `
query Header {
  header {
    navigation {
      navigationLabel
      id
      page {
        ... on AboutPageRecord {
          id
          slug
        }
        ... on BlogsPageRecord {
          id
          slug
        }
        ... on HomePageRecord {
          id
          slug
        }
      }
    }
  }
}`;
