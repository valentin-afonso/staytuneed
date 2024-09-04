import { performRequest } from "@/lib/datocms";
import { queryBlog } from "@/cms/queries/queryBlog";
import GridLayout from "@/ui/GridLayout";
import ArticleContent from "@/ui/ArticleContent";
import Tags from "@/ui/Tags";
import ReadingTime from "@/ui/ReadingTime";
import DateArticle from "@/ui/DateArticle";
import SectionRelatedArticles from "@/ui/SectionRelatedArticles";
import Image from "next/image";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { article } = await performRequest({
    query: queryBlog,
    variables: { slug },
  });
  const image = article?.image;
  return (
    <GridLayout size="blog" additional_class="">
      <Image
        src={image?.url}
        width={image?.width}
        height={image?.height}
        alt={image?.alt}
        className="rounded mb-4"
      />
      <h1 className="text-4xl mb-4 font-semibold">{article.title}</h1>
      <div className="flex flex-col gap-4 mb-4 pb-4 border-b border-b-gray-200">
        <div className="flex justify-between">
          <DateArticle date={article._publishedAt} />
          <ReadingTime time={article.readingTime} />
        </div>
        <Tags tags={article.tags} />
      </div>

      <ArticleContent content={article.content} />
      <SectionRelatedArticles tags={article.tags} />
    </GridLayout>
  );
}
