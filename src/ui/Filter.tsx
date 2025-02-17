"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type ButtonPrimaryType = {
  children: React.ReactNode;
  tag: any;
};

export default function Filter({ children, tag }: ButtonPrimaryType) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get("tags")?.split(",").map(decodeURIComponent) || []
  );

  // Sync selectedTags with URL query parameters
  useEffect(() => {
    const tagsFromURL =
      searchParams.get("tags")?.split(",").map(decodeURIComponent) || [];
    setSelectedTags(tagsFromURL);
  }, [searchParams]);

  const handleTagToggle = (tagSlug: string) => {
    const updatedTags = selectedTags.includes(tagSlug)
      ? selectedTags.filter((t) => t !== tagSlug)
      : [...selectedTags, tagSlug];

    setSelectedTags(updatedTags);

    const params = new URLSearchParams(searchParams);
    if (updatedTags.length > 0) {
      params.set("tags", updatedTags.map(encodeURIComponent).join(","));
    } else {
      params.delete("tags");
    }
    console.log(`/blog?${params.toString()}`); // Debugging
    router.push(`/blog?${params.toString()}`);
  };

  return <div onClick={() => handleTagToggle(tag.slug)}>{children}</div>;
}
