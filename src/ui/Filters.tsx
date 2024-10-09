import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getFilteredArticles } from "@/app/actions";

export default function Filters({
  tags,
  selectedTags,
  setSelectedTags,
  setFilteredArticles,
  setSkip,
}: any) {
  /*
  const handleToggle = (value: string) => {
    if (selectedTags.includes(value)) {
      setSelectedTags(selectedTags.filter((tag: any) => tag !== value));
    } else {
      setSelectedTags([...selectedTags, value]);
    }
  };
  */

  const handleTagToggle = async (tagId: string) => {
    let updatedTags: string[] = [];
    if (selectedTags.includes(tagId)) {
      updatedTags = selectedTags.filter((id: any) => id !== tagId);
    } else {
      updatedTags = [...selectedTags, tagId];
    }

    setSelectedTags(updatedTags);

    // Fetch les articles filtrés côté serveur
    setSkip(0);
    const { articles: newArticles, total } = await getFilteredArticles(
      updatedTags,
      0
    );
    // const filteredArticles = await getFilteredArticles(updatedTags, 0);
    setFilteredArticles(newArticles); // Mets à jour la liste des articles
  };

  const list_tags = tags.map((tag: any) => (
    <CarouselItem key={tag.id} className={`grid basis-auto pl-3`}>
      <ToggleGroupItem
        value={tag.id}
        onClick={() => handleTagToggle(tag.id)}
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
