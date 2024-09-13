import { performRequest } from "@/lib/datocms";
import { queryBlog } from "@/cms/queries/queryBlog";
import GridLayout from "@/ui/GridLayout";
import ArticleContent from "@/ui/ArticleContent";
import Author from "@/ui/Author";
import Tags from "@/ui/Tags";
import ReadingTime from "@/ui/ReadingTime";
import DateArticle from "@/ui/DateArticle";
import SectionRelatedArticles from "@/ui/SectionRelatedArticles";
import Image from "next/image";
import BlocBreadcrumb from "@/ui/BlocBreadcrumb";
import Summary from "@/ui/Summary";
import { Toaster } from "sonner";
import SectionArticlesSameAuthor from "@/ui/SectionArticlesSameAuthor";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { article } = await performRequest({
    query: queryBlog,
    variables: { slug },
  });

  const seo = article.seo || [];
  const title =
    seo.find((s: any) => s.tag === "title")?.content || article.title;

  return {
    title,
    description: seo.find((s: any) => s.attributes?.name === "description")
      ?.attributes?.content,
    openGraph: {
      title:
        seo.find((s: any) => s.attributes?.property === "og:title")?.attributes
          ?.content || article.title,
      description: seo.find(
        (s: any) => s.attributes?.property === "og:description"
      )?.attributes?.content,
      images: [
        {
          url:
            seo.find((s: any) => s.attributes?.property === "og:image")
              ?.attributes?.content || article.image.url,
          width:
            seo.find((s: any) => s.attributes?.property === "og:image:width")
              ?.attributes?.content || 1200,
          height:
            seo.find((s: any) => s.attributes?.property === "og:image:height")
              ?.attributes?.content || 630,
        },
      ],
    },
    twitter: {
      title:
        seo.find((s: any) => s.attributes?.name === "twitter:title")?.attributes
          ?.content || article.title,
      description: seo.find(
        (s: any) => s.attributes?.name === "twitter:description"
      )?.attributes?.content,
      card:
        seo.find((s: any) => s.attributes?.name === "twitter:card")?.attributes
          ?.content || "summary_large_image",
      image:
        seo.find((s: any) => s.attributes?.name === "twitter:image")?.attributes
          ?.content || article.image.url,
    },
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { article } = await performRequest({
    query: queryBlog,
    variables: { slug },
  });
  const image = article?.image;
  const three = [
    { url: "/", title: "Home" },
    { url: "/blog", title: "Blog" },
    { url: `/blog/${slug}`, title: article.title },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://staytuneed.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://staytuneed.vercel.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GridLayout size="blog" additional_class="">
        <Summary content={article.content} />
        <BlocBreadcrumb items={three} />
        <h1 className="text-4xl mb-4 font-semibold">{article.title}</h1>
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
          alt={image?.alt}
          placeholder="blur"
          blurDataURL={image.blurUpThumb}
          className="rounded mb-12 shadow-lg"
        />

        <ArticleContent content={article.content} />
        <Author author={article.author} />
        {article.author && (
          <SectionArticlesSameAuthor id_author={article.author.id} />
        )}
        <SectionRelatedArticles tags={article.tags} />
        <Toaster />
      </GridLayout>
    </>
  );
}
