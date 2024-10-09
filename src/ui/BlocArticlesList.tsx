import { performRequest } from "@/lib/datocms";
import { queryBlogs } from "@/cms/queries/queryBlogs";
import { queryAllTags } from "@/cms/queries/queryTags";
import ArticleList from "@/ui/ArticleList";

export default async function BlocArticlesList() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const { allArticles } = await performRequest({
    query: queryBlogs,
    variables: {
      skip: 0,
      first: 16,
    },
  });
  const { allTags } = await performRequest({
    query: queryAllTags,
  });
  const allTagIds = allTags.map((tag: { id: string }) => tag.id);
  return (
    <ArticleList articles={allArticles} tags={allTags} allTagIds={allTagIds} />
  );
}
