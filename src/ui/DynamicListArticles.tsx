import ArticleTeaser from "@/ui/ArticleTeaser";

export default function DynamicListArticles({ articles }: any) {
  const listItems = articles.map((article: any) => (
    <ArticleTeaser key={article.id} article={article} />
  ));
  return <div className="grid grid-cols-4 gap-2">{listItems}</div>;
}
