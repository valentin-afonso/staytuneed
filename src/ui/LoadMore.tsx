import { Dispatch, SetStateAction } from "react";
import { getFilteredArticles } from "@/app/actions";
import { useState, useEffect } from "react";
import Loader from "@/ui/Loader";

interface LoadMoreProps {
  skip: number;
  setSkip: Dispatch<SetStateAction<number>>;
  selectedTags: String[];
  filteredArticles: any[];
  setFilteredArticles: Dispatch<SetStateAction<any>>;
}

export default function LoadMore({
  skip,
  setSkip,
  selectedTags,
  filteredArticles,
  setFilteredArticles,
}: LoadMoreProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [totalArticles, setTotalArticles] = useState<number>(0);
  const [loadedArticles, setLoadedArticles] = useState<number>(0);

  /*
  useEffect(() => {
    setLoadedArticles(filteredArticles.length);
  }, [filteredArticles]);
  */

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const newSkip = skip + 16;
      setSkip(newSkip);
      // const newArticles = await getFilteredArticles(selectedTags, newSkip);
      const { articles: newArticles, total } = await getFilteredArticles(
        selectedTags,
        newSkip
      );
      setFilteredArticles((prevArticles: any[]) => [
        ...prevArticles,
        ...newArticles,
      ]);
      setTotalArticles(total);
      console.log(total);
    } catch (error) {
      console.error("Erreur lors du chargement des articles :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={() => handleLoadMore()}
        disabled={loading} // || loadedArticles >= totalArticles
        className="relative link_primary flex items-center gap-3 w-max px-4 py-1 rounded-sm bg-white border border-gray-border shadow-sm"
      >
        {loading && <Loader />} Load more
      </button>
    </div>
  );
}
