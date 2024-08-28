import { performRequest } from "@/lib/datocms";
import { queryBlogs } from "@/cms/queries/queryBlogs";
import { queryAllTags } from "@/cms/queries/queryTags";
import ArticleList from "@/ui/ArticleList";

export default async function BlocArticlesList() {
  const { allArticles } = await performRequest({ query: queryBlogs });
  const { allTags } = await performRequest({ query: queryAllTags });
  return <ArticleList articles={allArticles} tags={allTags} />;
}
