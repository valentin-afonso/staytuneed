"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getFilteredArticles } from "@/app/actions";
import { performRequest } from "@/lib/datocms";

import { queryAllTags } from "@/cms/queries/queryTags";

export default function Filters({ tags }: any) {
  // const allTagSlug = tags.map((tag: { slug: string }) => tag.slug);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const router = useRouter();
  /*
  const handleToggle = (value: string) => {
    if (selectedTags.includes(value)) {
      setSelectedTags(selectedTags.filter((tag: any) => tag !== value));
    } else {
      setSelectedTags([...selectedTags, value]);
    }
  };
  */

  const handleTagToggle = (tagSlug: string) => {
    let updatedTags: string[] = [];
    if (selectedTags.includes(tagSlug)) {
      updatedTags = selectedTags.filter((slug: any) => slug !== tagSlug);
    } else {
      updatedTags = [...selectedTags, tagSlug];
    }
    setSelectedTags(updatedTags);
    const chaine = updatedTags.join(",");
    router.push(`/blog?tags=${chaine}`);

    /*
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
    */
  };

  const list_tags = tags.map((tag: any) => (
    <CarouselItem key={tag.id} className={`grid basis-auto pl-3`}>
      <ToggleGroupItem
        value={tag.slug}
        onClick={() => handleTagToggle(tag.slug)}
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
