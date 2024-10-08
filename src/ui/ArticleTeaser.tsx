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
  const alt = image?.alt ? image?.alt : "article staytuneed";
  const tagsString: string = article.tags
    .map((tag: any) => tag.libelle)
    .join(" ");

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    alternativeHeadline: article.title,
    image: image?.url,
    editor: "Staytuneed",
    genre: tagsString,
    keywords: tagsString,
    publisher: "Staytuneed",
    url: `https://www.staytuneed.com/blog/${article.slug}`,
    datePublished: article._createdAt,
    dateCreated: article._createdAt,
    dateModified: article._updatedAt,
    description: article.teaser,
    articleBody: article.teaser,
    author: {
      "@type": "Person",
      name: `${article.author.firstname} ${article.author.lastname}`,
    },
  };
  const jsonLdImage = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    author: "Staytuneed",
    contentUrl: image?.url,
    datePublished: article._createdAt,
    description: alt,
    name: article.title,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdImage) }}
      />
      <Link
        href={`/blog/${article.slug}`}
        className="card relative grid  grid-rows-teaser gap-4 max-w-[100%] w-[200px] sm:w-[276px] p-2 rounded-xl bg-white border border-gray-border shadow-light hover:shadow-md"
      >
        <Image
          src={image?.url}
          width={840}
          height={500}
          alt={alt}
          placeholder="blur"
          blurDataURL={image.blurUpThumb}
          className="rounded max-w-full"
        />
        <ReadingTime time={article.readingTime} />
        <div>
          <h2 className="font-bold text-base mb-2 sm:text-lg sm:mb-3">
            {article.title}
          </h2>
          <p className="text-sm sm:text-base">{short_teaser}</p>
        </div>
        <div className="flex items-end max-w-full overflow-hidden">
          <Tags tags={article.tags} />
        </div>
      </Link>
    </>
  );
}
