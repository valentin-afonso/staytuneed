export const queryBlogs = `
query Blogs($tags: LinksFilter, $skip: IntType, $first: IntType) {
  allArticles(filter: {tags: $tags}, skip: $skip first: $first) {
    _createdAt
    _updatedAt
    id
    teaser
    title
    slug
    readingTime
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
