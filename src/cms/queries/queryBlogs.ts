export const queryBlogs = `
query Blogs {
  allArticles {
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
    image {
      width
      height
      alt(locale: fr)
      blurUpThumb
      url
    }
  }
}`;
