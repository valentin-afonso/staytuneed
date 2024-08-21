import Link from "next/link";
import Tags from "@/ui/Tags";
import ReadingTime from "@/ui/ReadingTime";

export default function ArticleTeaser({ article }: any) {
  return (
    <Link href={`/blog/${article.slug}`}>
      <h2>{article.title}</h2>
      <ReadingTime time={article.readingTime} />
      <p>{article.teaser}</p>
      <Tags tags={article.tags} />
    </Link>
  );
}
