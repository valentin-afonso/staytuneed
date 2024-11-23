import { performRequest } from "@/lib/datocms";
import { queryBlogs } from "@/cms/queries/queryBlogs";

import { queryAllTags } from "@/cms/queries/queryTags";
import DynamicListArticles from "@/ui/DynamicListArticles";

export default async function BlocArticlesList({ searchParams }: any) {
  const { allTags } = await performRequest({
    query: queryAllTags,
  });

  const filters = searchParams.tags;
  const params_tags = filters || "";
  const filtersArray = params_tags.split(",");
  const filteredIds = allTags
    .filter((tag: any) => filtersArray.includes(tag.slug))
    .map((tag: any) => tag.id);

  /*
    skip: 0,
    first: 16,
  */
  const { allArticles } = await performRequest({
    query: queryBlogs,
    variables: {
      tags: {
        anyIn: filteredIds,
      },
    },
  });
  return (
    <DynamicListArticles
      articles={allArticles}
      columns="gap-x-2 grid-cols-2 sm:grid-cols-[200px_200px] md:grid-cols-3 lg:grid-cols-[276px_276px_276px] xl:grid-cols-[276px_276px_276px_276px]"
    />
  );
}
