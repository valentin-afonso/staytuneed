import ArticleTeaser from "./ArticleTeaser";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SliderArticles({ articles }: any) {
  const article_slides = articles.map((article: any) => (
    <CarouselItem
      key={article.id}
      className="grid md:basis-1/2 lg:basis-1/3 pl-8"
    >
      <ArticleTeaser article={article} />
    </CarouselItem>
  ));
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-8">{article_slides}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
