import GridLayout from "@/ui/GridLayout";
import { performRequest } from "@/lib/datocms";
import { queryFavouriteArticles } from "@/cms/queries/queryFavouritesArticles";
import SliderArticles from "@/ui/SliderArticles";
import TitleSecond from "@/ui/TitleSecond";

export default async function SectionFavouriteArticle() {
  const { favourite } = await performRequest({ query: queryFavouriteArticles });
  if (!favourite) return <div>...</div>;
  const articles = favourite.article;
  return (
    <GridLayout size="boxed" additional_class="mb-32">
      <TitleSecond>{favourite.title}</TitleSecond>
      <SliderArticles articles={articles} slidePerView="3" />
    </GridLayout>
  );
}
