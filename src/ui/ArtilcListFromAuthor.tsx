import DynamicListArticles from "@/ui/DynamicListArticles";
import { performRequest } from "@/lib/datocms";
import { queryArticlesSameAuthor } from "@/cms/queries/queryArticlesSameAuthor";

export default async function ArtilcListFromAuthor({ idAuthor }: any) {
  const { allArticles } = await performRequest({
    query: queryArticlesSameAuthor,
    variables: { eq: idAuthor },
  });

  return (
    <>
      <DynamicListArticles
        articles={allArticles}
        columns="gap-x-2 grid-cols-2 sm:grid-cols-[200px_200px] md:grid-cols-3 lg:grid-cols-[276px_276px_276px] xl:grid-cols-[276px_276px_276px_276px]"
      />
    </>
  );
}
