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

  return (
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
  );
}
