export const queryAuthor = `
query Author($slug: String!) {
  author(filter: {slug: {eq: $slug}}) {
    firstname
    id
    slug
    socialUrl
    social
    pictureProfil {
      alt
      blurhash
      height
      title
      width
      blurUpThumb
    }
    lastname
  }
}
`;
