import ArticleTeaser from "./ArticleTeaser";
import NoArticle from "@/ui/NoArticle";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SliderArticles({ articles, slidePerView }: any) {
  let class_slide_per_view = `lg:basis-1/3`;
  if (slidePerView === "6") {
    class_slide_per_view = "lg:basis-1/6";
  }
  if (slidePerView === "auto") {
    class_slide_per_view = "";
  }
  if (articles.length === 0)
    return (
      <NoArticle text="It’s a bit quiet here now, but articles will be up soon!" />
    );

  const article_slides = articles.map((article: any) => (
    <CarouselItem
      key={article.id}
      className={`grid md:basis-1/2 lg:basis-auto pl-8`}
    >
      <ArticleTeaser article={article} />
    </CarouselItem>
  ));
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full min-h-[420px]"
    >
      <CarouselContent className="-ml-8 py-4 px-1">
        {article_slides}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
