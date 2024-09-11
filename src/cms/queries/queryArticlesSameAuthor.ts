export const queryArticlesSameAuthor = `
query MyQuery($eq: ItemId) {
  allArticles(filter: {author: {eq: $eq}}, first: "2") {
   title
    teaser
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
    slug
    readingTime
  }
}
`;
