import GridLayout from "@/ui/GridLayout";
import { performRequest } from "@/lib/datocms";
import { queryLastArticle } from "@/cms/queries/queryLastArticles";
import SliderArticles from "@/ui/SliderArticles";
import TitleSecond from "@/ui/TitleSecond";

export default async function SectionLastArticle() {
  const { allArticles } = await performRequest({ query: queryLastArticle });
  if (!allArticles) return <div>...</div>;
  return (
    <GridLayout size="boxed" additional_class="mb-32">
      <TitleSecond>Our last articles</TitleSecond>
      <SliderArticles articles={allArticles} slidePerView="3" />
    </GridLayout>
  );
}
