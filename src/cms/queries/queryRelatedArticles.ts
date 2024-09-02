export const queryRelatedArticles = `
query MyQuery($tags: LinksFilter) {
  allArticles(filter: {tags: $tags}) {
    title
    teaser
    tags {
      libelle
      id
    }
    slug
    readingTime
  }
}
`;
