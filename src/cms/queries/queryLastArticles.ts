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
      author {
        id
        firstname
        lastname
        social
        socialUrl
        pictureProfil {
          url
          width
          height
        }
      }
      image {
        width
        height
        alt(locale: fr)
        blurUpThumb
        url
      }
    
  }
}`;
