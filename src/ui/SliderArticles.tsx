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
    <CarouselItem key={article.id} className="md:basis-1/2 lg:basis-1/3">
      <ArticleTeaser article={article} />
    </CarouselItem>
  ));
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>{article_slides}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
