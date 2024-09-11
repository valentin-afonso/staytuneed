export const queryLastArticle = `
query LastArticle {
  allArticles(orderBy: _createdAt_DESC, first: "8") {
      id
      teaser
      title
      readingTime
      slug
      tags {
        libelle
        id
      }
      image {
        width
        height
        alt(locale: fr)
        blurhash
        url
      }
    
  }
}`;
