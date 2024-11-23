import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Filter from "@/ui/Filter";
import FilterCount from "@/ui/FilterCount";
import FilterCountSkeleton from "@/ui/FilterCountSkeleton";
import { Suspense } from "react";

export default function Filters({ tags }: any) {
  const list_tags = tags.map((tag: any) => (
    <CarouselItem key={tag.id} className={`grid basis-auto pl-3`}>
      <Filter tag={tag}>
        <ToggleGroupItem
          value={tag.slug}
          className="flex items-center gap-2 whitespace-nowrap text-sm"
        >
          {tag.libelle}
          <Suspense fallback={<FilterCountSkeleton />}>
            <FilterCount tagId={tag.id} />
          </Suspense>
        </ToggleGroupItem>
      </Filter>
    </CarouselItem>
  ));
  return (
    <ToggleGroup type="multiple" size="sm" className="mb-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[90%] lg:max-w-full min-h-[40px] container_filters"
      >
        <CarouselContent className="-ml-3 py-4 px-1">
          {list_tags}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </ToggleGroup>
  );
}
