import GridLayout from "@/ui/GridLayout";
import { performRequest } from "@/lib/datocms";
import { queryLastArticle } from "@/cms/queries/queryLastArticles";
import SliderArticles from "@/ui/SliderArticles";
import TitleSecond from "@/ui/TitleSecond";
import ButtonPrimary from "@/ui/ButtonPrimary";

export default async function SectionLastArticle() {
  const { allArticles } = await performRequest({ query: queryLastArticle });
  if (!allArticles) return <div>...</div>;
  return (
    <GridLayout size="boxed" additional_class="mb-32">
      <div className="flex justify-between items-center">
        <TitleSecond>Our last articles</TitleSecond>
        <ButtonPrimary url="/blog" additional_class="">
          See all
        </ButtonPrimary>
      </div>
      <SliderArticles articles={allArticles} slidePerView="3" />
    </GridLayout>
  );
}
