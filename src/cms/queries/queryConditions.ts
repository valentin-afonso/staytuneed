export const queryConditions = `
query MyQuery {
  termAndCondition {
    title
    contentPage {
      value
      links
      blocks
    }
  }
}`;
