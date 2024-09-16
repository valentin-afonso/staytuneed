export const queryRelatedArticles = `
query MyQuery($tags: LinksFilter) {
  allArticles(filter: {tags: $tags}) {
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
