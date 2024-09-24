import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Filters({ tags, selectedTags, setSelectedTags }: any) {
  const handleToggle = (value: string) => {
    if (selectedTags.includes(value)) {
      setSelectedTags(selectedTags.filter((tag: any) => tag !== value));
    } else {
      setSelectedTags([...selectedTags, value]);
    }
  };

  const list_tags = tags.map((tag: any) => (
    <CarouselItem key={tag.id} className={`grid basis-auto pl-3`}>
      <ToggleGroupItem
        value={tag.libelle}
        onClick={() => handleToggle(tag.libelle)}
        className="whitespace-nowrap text-sm"
      >
        {tag.libelle}
      </ToggleGroupItem>
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
