import GridLayout from "@/ui/GridLayout";
import { performRequest } from "@/lib/datocms";
import { queryFavouriteArticles } from "@/cms/queries/queryFavouritesArticles";
import SliderArticles from "@/ui/SliderArticles";
import TitleSecond from "@/ui/TitleSecond";
import ButtonPrimary from "@/ui/ButtonPrimary";

export default async function SectionFavouriteArticle() {
  const { favourite } = await performRequest({ query: queryFavouriteArticles });
  if (!favourite) return <div>...</div>;
  const articles = favourite.article;
  return (
    <GridLayout size="boxed" additional_class="mb-32">
      <div className="flex justify-between items-center">
        <TitleSecond>{favourite.title}</TitleSecond>
        <ButtonPrimary url="/blog" additional_class="">
          See all
        </ButtonPrimary>
      </div>
      <SliderArticles articles={articles} slidePerView="3" />
    </GridLayout>
  );
}
