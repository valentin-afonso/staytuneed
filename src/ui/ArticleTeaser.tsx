import Link from "next/link";

export default function ArticleTeaser({ article }: any) {
  return (
    <li>
      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
    </li>
  );
}
