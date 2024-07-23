import { performRequest } from "@/lib/datocms";
const PAGE_CONTENT_QUERY = `
  query Home {
    homePage {
      title
      test {
        ... on BlogSliderRecord {
          id
        }
        ... on TextRecord {
          id
        }
        ... on LinkRecord {
          id
          linkLabel
          url
        }
      }
    }
  }`;
export default async function Home() {
  const {
    data: { homePage },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });
  console.log(homePage);

  return (
    <div>
      <h1>{homePage.title}</h1>
    </div>
  );
}
