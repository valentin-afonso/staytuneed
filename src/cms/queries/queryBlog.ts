export const queryBlog = `
query Blog($slug: String!) {
  article(filter: {slug: {in: [$slug]}}) {
    id
    slug
    title
    _publishedAt
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
    readingTime
    content {
      blocks
      links
      value
    }
  }
}`;
