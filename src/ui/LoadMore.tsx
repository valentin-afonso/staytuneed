"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Dispatch, SetStateAction } from "react";
import { getFilteredArticles } from "@/app/actions";
import { useState, useEffect } from "react";
import Loader from "@/ui/Loader";

export default function LoadMore() {
  const [loading, setLoading] = useState<boolean>(false);
  const [skip, setSkip] = useState<string>("");
  const [totalArticles, setTotalArticles] = useState<number>(0);
  const [loadedArticles, setLoadedArticles] = useState<number>(0);
  const searchParams = useSearchParams();

  /*
  useEffect(() => {
    setLoadedArticles(filteredArticles.length);
  }, [filteredArticles]);
  */

  const handleLoadMore = async () => {
    setLoading(true);
    const currentskip = searchParams.get("skip") || "";
    const newSkip = currentskip + 16;
    const params = new URLSearchParams(searchParams);
    setSkip(newSkip);
    /*
    try {
      const newSkip = currentskip + 16;

      setSkip(newSkip);
      const { articles: newArticles, total } = await getFilteredArticles(
        selectedTags,
        newSkip
      );
      setFilteredArticles((prevArticles: any[]) => [
        ...prevArticles,
        ...newArticles,
      ]);
      setTotalArticles(total);
    } catch (error) {
      console.error("Erreur lors du chargement des articles :", error);
    } finally {
      setLoading(false);
    }
      */
  };

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={() => handleLoadMore()}
        disabled={loading} // || loadedArticles >= totalArticles
        className="relative link_primary flex items-center gap-3 w-max px-4 py-1 rounded-sm bg-white border border-gray-border shadow-sm"
      >
        {loading && <Loader />} Load more {skip}
      </button>
    </div>
  );
}
