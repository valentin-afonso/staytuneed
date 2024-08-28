import ArticleTeaser from "@/ui/ArticleTeaser";

export default function DynamicListArticles({ articles }: any) {
  const listItems = articles.map((article: any) => (
    <ArticleTeaser key={article.id} article={article} />
  ));
  return <div className="flex gap-2">{listItems}</div>;
}
