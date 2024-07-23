export const queryHomePage = `
query Home {
  homePage {
    title
    test {
      ... on BlogSliderRecord {
        id
      }
      ... on TextRecord {
        id
      }
      ... on LinkRecord {
        id
        linkLabel
        url
      }
    }
  }
}`;
