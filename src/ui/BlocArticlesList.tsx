import { performRequest } from "@/lib/datocms";
import { queryBlogs } from "@/cms/queries/queryBlogs";

import { queryAllTags } from "@/cms/queries/queryTags";
import ArticleList from "@/ui/ArticleList";
import DynamicListArticles from "@/ui/DynamicListArticles";

export default async function BlocArticlesList({ searchParams }: any) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  /*
  const { allArticles } = await performRequest({
    query: queryBlogs,
    variables: {
      skip: 0,
      first: 16,
    },
  });
  */

  const { allTags } = await performRequest({
    query: queryAllTags,
  });

  const filters = searchParams.tags;
  const params_tags = filters || "";
  const filtersArray = params_tags.split(",");
  const filteredIds = allTags
    .filter((tag: any) => filtersArray.includes(tag.slug))
    .map((tag: any) => tag.id);

  // const allTagIds = allTags.map((tag: { id: string }) => tag.id);

  const { allArticles } = await performRequest({
    query: queryBlogs,
    variables: {
      tags: {
        anyIn: filteredIds,
      },
      skip: 0,
      first: 16,
    },
  });
  // <ArticleList articles={allArticles} tags={allTags} allTagIds={allTagIds} />
  return (
    <DynamicListArticles
      articles={allArticles}
      columns="gap-x-2 grid-cols-2 sm:grid-cols-[200px_200px] md:grid-cols-3 lg:grid-cols-[276px_276px_276px] xl:grid-cols-[276px_276px_276px_276px]"
    />
  );
}
