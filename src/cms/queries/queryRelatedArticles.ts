export const queryRelatedArticles = `
query MyQuery($tags: LinksFilter) {
  allArticles(filter: {tags: $tags}) {
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
