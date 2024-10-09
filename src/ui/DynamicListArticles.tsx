import ArticleTeaser from "@/ui/ArticleTeaser";
import NoArticle from "@/ui/NoArticle";

export default function DynamicListArticles({ articles, columns }: any) {
  if (articles.length === 0)
    return (
      <NoArticle text="It’s a bit quiet here now, but articles will be up soon!" />
    );
  const listItems = articles.map((article: any) => (
    <ArticleTeaser key={article.id} article={article} />
  ));

  return <div className={`grid ${columns}  gap-y-4`}>{listItems}</div>;
}
