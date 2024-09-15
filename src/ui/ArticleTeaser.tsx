import Link from "next/link";
import Tags from "@/ui/Tags";
import ReadingTime from "@/ui/ReadingTime";
import Image from "next/image";

export default function ArticleTeaser({ article }: any) {
  const image = article?.image;
  const max_length = 75;
  let suffix = "";
  if (article.teaser.length > max_length) {
    suffix = "...";
  }
  const short_teaser = article.teaser.substring(0, max_length) + suffix;

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="relative grid  grid-rows-teaser gap-4 w-[276px] p-2 rounded-xl shadow-light"
    >
      <Image
        src={image?.url}
        width={840}
        height={500}
        alt={image?.alt}
        placeholder="blur"
        blurDataURL={image.blurUpThumb}
        className="rounded"
      />
      <ReadingTime time={article.readingTime} />
      <div>
        <h2 className="font-bold text-lg mb-3">{article.title}</h2>
        <p>{short_teaser}</p>
      </div>
      <div className="flex items-end">
        <Tags tags={article.tags} />
      </div>
    </Link>
  );
}
