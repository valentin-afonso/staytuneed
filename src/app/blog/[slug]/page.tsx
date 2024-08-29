import { performRequest } from "@/lib/datocms";
import { queryBlog } from "@/cms/queries/queryBlog";
import GridLayout from "@/ui/GridLayout";
import ArticleContent from "@/ui/ArticleContent";
import Tags from "@/ui/Tags";
import ReadingTime from "@/ui/ReadingTime";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { article } = await performRequest({
    query: queryBlog,
    variables: { slug },
  });
  return (
    <GridLayout size="blog" additional_class="">
      <h1 className="text-4xl mb-4 font-semibold">{article.title}</h1>
      <div className="flex justify-between mb-4 pb-4 border-b border-b-gray-200">
        <Tags tags={article.tags} />
        <ReadingTime time={article.readingTime} />
      </div>
      <ArticleContent content={article.content} />
    </GridLayout>
  );
}
