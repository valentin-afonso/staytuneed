import GridLayout from "@/ui/GridLayout";
import { performRequest } from "@/lib/datocms";
import { queryLastArticle } from "@/cms/queries/queryLastArticles";
import SliderArticles from "@/ui/SliderArticles";

export default async function SectionLastArticle() {
  const { lastArticle } = await performRequest({ query: queryLastArticle });
  if (!lastArticle) return <div>...</div>;
  const title = lastArticle?.title;
  const articles = lastArticle?.article;
  return (
    <GridLayout size="boxed" additional_class="">
      <h2>{title}</h2>
      <SliderArticles articles={articles} />
    </GridLayout>
  );
}
