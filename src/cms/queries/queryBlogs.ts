export const queryBlogs = `
query Blogs {
  allArticles {
    _createdAt
    id
    teaser
    title
    slug
    readingTime
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
