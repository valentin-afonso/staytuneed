export const queryHomePage = `
query Home {
  homePage {
    content {
      ... on TextRecord {
        id
        text
      }
    }
    id
    slug
    introText
    titleDouble {
      firstPart
      secondPart
    }
  }
}`;
