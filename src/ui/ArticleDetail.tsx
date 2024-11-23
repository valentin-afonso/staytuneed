import { performRequest } from "@/lib/datocms";
import { queryBlog } from "@/cms/queries/queryBlog";
import ArticleContent from "@/ui/ArticleContent";
import Author from "@/ui/Author";
import Tags from "@/ui/Tags";
import ReadingTime from "@/ui/ReadingTime";
import DateArticle from "@/ui/DateArticle";
import SectionRelatedArticles from "@/ui/SectionRelatedArticles";
import Image from "next/image";
import Summary from "@/ui/Summary";
import SectionArticlesSameAuthor from "@/ui/SectionArticlesSameAuthor";

export default async function ArticleDetail({ slug }: any) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const { article } = await performRequest({
    query: queryBlog,
    variables: { slug },
  });
  const image = article?.image;
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
    url: `https://www.staytuneed.com/blog/${slug}`,
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
      <Summary content={article.content} />
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-semibold">
        {article.title}
      </h1>
      <div className="flex flex-col gap-4 mb-8 pb-4 border-b border-b-gray-200">
        <div className="flex justify-between">
          <DateArticle
            date={article._createdAt}
            updatedAt={article._updatedAt}
          />
          <ReadingTime time={article.readingTime} />
        </div>
        <Tags tags={article.tags} />
      </div>
      <Image
        src={image?.url}
        width={840}
        height={500}
        alt={alt}
        placeholder="blur"
        blurDataURL={image.blurUpThumb}
        className="rounded mb-12 shadow-lg max-w-full"
      />

      <ArticleContent content={article.content} />
      <Author author={article.author} />
      {article.author && (
        <SectionArticlesSameAuthor id_author={article.author.id} />
      )}
      <SectionRelatedArticles tags={article.tags} />
    </>
  );
}
