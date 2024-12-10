export const queryAllAuthors = `
query MyQuery {
  allAuthors {
    firstname
    lastname
    id
    slug
    socialUrl
    social
    pictureProfil {
      height
      width
      url
      alt
      blurUpThumb
    }
  }
}
`;
