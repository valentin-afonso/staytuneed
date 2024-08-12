import { performRequest } from "@/lib/datocms";
import { queryBlogs } from "@/cms/queries/queryBlogs";
import ArticleTeaser from "@/ui/ArticleTeaser";

export default async function ArticleList() {
  const { allArticles } = await performRequest({ query: queryBlogs });

  const listItems = allArticles.map((article: any) => (
    <ArticleTeaser key={article.id} article={article} />
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
