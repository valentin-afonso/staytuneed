import { performRequest } from "@/lib/datocms";
import { queryArticlesSameAuthor } from "@/cms/queries/queryArticlesSameAuthor";
import DynamicListArticles from "@/ui/DynamicListArticles";

export default async function SectionArticlesSameAuthor({ id_author }: any) {
  const { allArticles } = await performRequest({
    query: queryArticlesSameAuthor,
    variables: { eq: id_author },
  });
  if (!allArticles) return null;
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-medium mt-8 mb-4">From the same author</h2>
      <DynamicListArticles
        articles={allArticles}
        columns="grid-cols-2 sm:grid-cols-[200px_200px] md:grid-cols-[276px_276px] gap-4"
      />
    </div>
  );
}
