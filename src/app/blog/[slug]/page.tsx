import { performRequest } from "@/lib/datocms";
import { queryBlog } from "@/cms/queries/queryBlog";
import GridLayout from "@/ui/GridLayout";
import ArticleContent from "@/ui/ArticleContent";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { article } = await performRequest({
    query: queryBlog,
    variables: { slug },
  });
  return (
    <GridLayout size="blog" additional_class="">
      {article.title}
      <ArticleContent content={article.content} />
    </GridLayout>
  );
}
