import GridLayout from "@/ui/GridLayout";
import { performRequest } from "@/lib/datocms";
import { queryLastArticle } from "@/cms/queries/queryLastArticles";
import SliderArticles from "@/ui/SliderArticles";
import TitleSecond from "@/ui/TitleSecond";

export default async function SectionLastArticle() {
  const { lastArticle } = await performRequest({ query: queryLastArticle });
  if (!lastArticle) return <div>...</div>;
  const title = lastArticle?.title;
  const articles = lastArticle?.article;
  return (
    <GridLayout size="boxed" additional_class="mb-32">
      <TitleSecond>{title}</TitleSecond>
      <SliderArticles articles={articles} />
    </GridLayout>
  );
}
