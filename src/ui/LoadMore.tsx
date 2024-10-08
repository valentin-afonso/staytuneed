import { Dispatch, SetStateAction } from "react";
import { getFilteredArticles } from "@/app/actions";
import { useState } from "react";
import Loader from "@/ui/Loader";

interface LoadMoreProps {
  skip: number;
  setSkip: Dispatch<SetStateAction<number>>;
  selectedTags: String[];
  setFilteredArticles: Dispatch<SetStateAction<any>>;
}

export default function LoadMore({
  skip,
  setSkip,
  selectedTags,
  setFilteredArticles,
}: LoadMoreProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const newSkip = skip + 4;
      setSkip(newSkip);
      const newArticles = await getFilteredArticles(selectedTags, newSkip);
      setFilteredArticles((prevArticles: any[]) => [
        ...prevArticles,
        ...newArticles,
      ]);
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
        disabled={loading}
        className="relative link_primary flex items-center gap-3 w-max px-4 py-1 rounded-sm bg-white border border-gray-border shadow-sm"
      >
        {loading && <Loader />} Load more
      </button>
    </div>
  );
}
