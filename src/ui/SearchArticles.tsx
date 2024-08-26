import SliderArticles from "@/ui/SliderArticles";
import { performRequest } from "@/lib/datocms";
import { queryLastArticle } from "@/cms/queries/queryLastArticles";

export default async function SearchArticles() {
  const { lastArticle } = await performRequest({ query: queryLastArticle });
  if (!lastArticle) return <div>...</div>;
  const articles = lastArticle?.article;
  return (
    <>
      <SliderArticles articles={articles} />
    </>
  );
}
