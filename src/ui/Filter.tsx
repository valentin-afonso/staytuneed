"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type ButtonPrimaryType = {
  children: React.ReactNode;
  tag: any;
};
export default function Filter({ children, tag }: ButtonPrimaryType) {
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get("tags")?.split(",") || []
  );

  const handleTagToggle = (tagSlug: string) => {
    /*
    const currentTags = searchParams.get("tags")?.split(",") || [];
    let updatedTags;
    if (currentTags.includes(tagSlug)) {
      updatedTags = currentTags.filter((t) => t !== tagSlug);
    } else {
      updatedTags = [...currentTags, tagSlug];
    }

    const params = new URLSearchParams(searchParams);
    if (updatedTags.length > 0) {
      params.set("tags", updatedTags.join(","));
    } else {
      params.delete("tags");
    }
    router.push(`/blog?${params.toString()}`);
    */
    const updatedTags = selectedTags.includes(tagSlug)
      ? selectedTags.filter((t) => t !== tagSlug)
      : [...selectedTags, tagSlug];

    setSelectedTags(updatedTags);

    const params = new URLSearchParams(searchParams);
    if (updatedTags.length > 0) {
      params.set("tags", updatedTags.join(","));
    } else {
      params.delete("tags");
    }
    router.push(`/blog?${params.toString()}`);
  };
  return <div onClick={() => handleTagToggle(tag.slug)}>{children}</div>;
}
