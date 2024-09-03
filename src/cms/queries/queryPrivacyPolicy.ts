export const queryPolicyPrivacy = `
query MyQuery {
  privacyPolicy {
    title
    contentPage {
      blocks
      links
      value
    }
  }
}`;
