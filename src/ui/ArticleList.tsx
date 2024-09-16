"use client";

import { useState } from "react";
import Filters from "@/ui/Filters";
import DynamicListArticles from "@/ui/DynamicListArticles";

export default function ArticleList({ articles, tags }: any) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filtered_articles = articles.filter(
    (article: any) =>
      selectedTags.length === 0 ||
      article.tags.some((tag: any) =>
        selectedTags.includes(tag.libelle.toLowerCase())
      )
  );

  return (
    <>
      <Filters
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <DynamicListArticles
        articles={filtered_articles}
        columns="grid-cols-4 gap-x-2 max-md:grid-cols-2 max-lg:grid-cols-[276px_276px_276px] max-xl:grid-cols-[276px_276px_276px_276px]"
      />
    </>
  );
}
