import { performRequest } from "@/lib/datocms";
import { queryBlog } from "@/cms/queries/queryBlog";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { article } = await performRequest({
    query: queryBlog,
    variables: { slug },
  });
  return <div>{article.title}</div>;
}
