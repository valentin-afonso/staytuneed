"use client";

import { useState, useEffect } from "react";
import Filters from "@/ui/Filters";
import DynamicListArticles from "@/ui/DynamicListArticles";

export default function ArticleList({ articles, tags }: any) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    const filtered = articles.filter(
      (article: any) =>
        selectedTags.length === 0 ||
        article.tags.some((tag: any) =>
          selectedTags.includes(tag.libelle.toLowerCase())
        )
    );

    setFilteredArticles(filtered);
  }, [selectedTags, articles]);

  return (
    <>
      <Filters
        tags={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <DynamicListArticles articles={filteredArticles} />
    </>
  );
}
