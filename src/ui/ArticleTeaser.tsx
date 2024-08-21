import Link from "next/link";
import Tags from "@/ui/Tags";
import ReadingTime from "@/ui/ReadingTime";

export default function ArticleTeaser({ article }: any) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="relative grid  grid-rows-teaser gap-4 w-[276px] p-2 rounded-xl shadow-light"
    >
      <div className="w-full h-[145px] bg-slate-600 rounded "></div>
      <ReadingTime time={article.readingTime} />
      <div>
        <h2 className="font-bold text-lg mb-3">{article.title}</h2>
        <p>{article.teaser}</p>
      </div>
      <div className="flex items-end">
        <Tags tags={article.tags} />
      </div>
    </Link>
  );
}
