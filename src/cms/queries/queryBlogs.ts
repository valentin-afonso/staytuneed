export const queryBlogs = `
query Blogs {
  allArticles {
    _createdAt
    id
    teaser
    title
    slug
  }
}`;
