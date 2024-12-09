export const queryAllAuthors = `
query MyQuery {
  allAuthors {
    id,
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
