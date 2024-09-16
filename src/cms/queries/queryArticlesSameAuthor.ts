export const queryArticlesSameAuthor = `
query MyQuery($eq: ItemId) {
  allArticles(filter: {author: {eq: $eq}}, first: "2") {
   title
    teaser
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
    slug
    readingTime
  }
}
`;
