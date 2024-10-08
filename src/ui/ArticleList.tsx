"use client";

import { useState } from "react";
import Filters from "@/ui/Filters";
import DynamicListArticles from "@/ui/DynamicListArticles";
import LoadMore from "@/ui/LoadMore";

export default function ArticleList({ articles, tags }: any) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<any[]>(articles);
  const [skip, setSkip] = useState<number>(0);

  return (
    <>
      <Filters
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        setFilteredArticles={setFilteredArticles}
        setSkip={setSkip}
      />
      <DynamicListArticles
        articles={filteredArticles}
        columns="gap-x-2 grid-cols-2 sm:grid-cols-[200px_200px] md:grid-cols-3 lg:grid-cols-[276px_276px_276px] xl:grid-cols-[276px_276px_276px_276px]"
      />
      <LoadMore
        skip={skip}
        setSkip={setSkip}
        selectedTags={selectedTags}
        setFilteredArticles={setFilteredArticles}
      />
    </>
  );
}
