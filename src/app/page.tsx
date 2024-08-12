import { performRequest } from "@/lib/datocms";
import { queryHomePage } from "@/cms/queries/queryHomePage";

export default async function Home() {
  const { homePage } = await performRequest({ query: queryHomePage });

  return (
    <div>
      <h1>{homePage?.title}</h1>
    </div>
  );
}
