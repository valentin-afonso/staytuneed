import { performRequest } from "@/lib/datocms";
import { queryAllTags } from "@/cms/queries/queryTags";
import { queryBlogs } from "@/cms/queries/queryBlogs";
import Filters from "@/ui/Filters";

async function fetchCountArticles(tagId: any) {
  const { allArticles } = await performRequest({
    query: queryBlogs,
    variables: {
      tags: {
        anyIn: tagId,
      },
    },
    revalidate: 3600,
  });
  return allArticles?.length || 0;
}
export default async function BlocFilters() {
  const { allTags } = await performRequest({
    query: queryAllTags,
    revalidate: 3600,
  });

  return (
    <>
      <Filters tags={allTags} />
    </>
  );
}
