export const queryHomePage = `
query Home {
  homePage {
    content {
      ... on BlogSliderRecord {
        id
      }
    }
    contentSecond {
      ... on TextRecord {
        id
        text
      }
    }
    contentThird {
      ... on FaqRecord {
        id
        faq {
          question
          id
          answer
        }
      }
      ... on TextRecord {
        id
        text
      }
    }
    id
    slug
    introText
    title
    titleDouble {
      firstPart
      secondPart
    }
  }
}`;
