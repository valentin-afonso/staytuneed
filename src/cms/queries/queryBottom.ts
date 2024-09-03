export const queryBottom = `
query MyQuery {
  bottom {
    navigation {
      navigationLabel
      id
      page {
        ... on PrivacyPolicyRecord {
          id
          slug
        }
        ... on TermAndConditionRecord {
          id
          slug
          title
        }
      }
    }
    id
  }
}`;
