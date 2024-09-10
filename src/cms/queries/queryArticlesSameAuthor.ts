export const queryArticlesSameAuthor = `
query MyQuery($eq: ItemId) {
  allArticles(filter: {author: {eq: $eq}}) {
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
