export const queryAuthor = `
query Author($slug: String!) {
  author(filter: {slug: {eq: $slug}}) {
    firstname
    id
    slug
    socialUrl
    social
    pictureProfil {
      url
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
