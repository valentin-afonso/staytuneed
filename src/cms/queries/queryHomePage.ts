export const queryHomePage = `
query Home {
  homePage {
    content {
      ... on BlogSliderRecord {
        blogs {
          title
          teaser
          slug
          tags {
            libelle
            id
          }
        }
      }
      ... on TitleRecord {
        title
      }
      ... on TextRecord {
        text
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
