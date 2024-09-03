import ArticleTeaser from "@/ui/ArticleTeaser";
import NoArticle from "@/ui/NoArticle";

export default function DynamicListArticles({ articles }: any) {
  const listItems = articles.map((article: any) => (
    <ArticleTeaser key={article.id} article={article} />
  ));
  console.log(articles);
  if (articles.length === 0)
    return (
      <NoArticle text="It’s a bit quiet here now, but articles will be up soon!" />
    );
  return <div className="grid grid-cols-4 gap-x-2 gap-y-4">{listItems}</div>;
}
