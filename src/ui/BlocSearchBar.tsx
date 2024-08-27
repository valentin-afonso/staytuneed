import { performRequest } from "@/lib/datocms";
import { queryBlogs } from "@/cms/queries/queryBlogs";
import SearchBar from "@/ui/SearchBar";

export default async function BlocSearchBar() {
  const { allArticles } = await performRequest({ query: queryBlogs });
  return (
    <>
      <SearchBar articles={allArticles} />
    </>
  );
}
