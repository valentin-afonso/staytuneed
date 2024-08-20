export const queryLastArticle = `
query LastArticle {
  lastArticle {
    title
    article {
      id
      teaser
      title
      readingTime
      slug
      tags {
        libelle
        id
      }
    }
  }
}`;
