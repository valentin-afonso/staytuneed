export const queryBlog = `
query Blog($slug: String!) {
  article(filter: {slug: {in: [$slug]}}) {
    id
    slug
    title
    tags {
      libelle
      id
    }
    readingTime
    content {
      blocks
      links
      value
    }
  }
}`;
