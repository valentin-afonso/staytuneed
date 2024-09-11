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
    <div>
      <h2 className="text-2xl font-medium mt-8">From the same author</h2>
      <DynamicListArticles
        articles={allArticles}
        columns="grid-cols-[276px_276px]"
      />
    </div>
  );
}
