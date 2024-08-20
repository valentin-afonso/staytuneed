import ArticleTeaser from "./ArticleTeaser";

export default function SliderArticles({ articles }: any) {
  const listArticles = articles.map((article: any) => (
    <ArticleTeaser key={article.id} article={article} />
  ));
  return <ul className="flex gap-2">{listArticles}</ul>;
}
