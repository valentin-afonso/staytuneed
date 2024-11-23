import DynamicListArticles from "@/ui/DynamicListArticles";
import { performRequest } from "@/lib/datocms";
import { queryArticlesSameAuthor } from "@/cms/queries/queryArticlesSameAuthor";

export default async function ArtilcListFromAuthor({ idAuthor }: any) {
  console.log(idAuthor);
  const { articles } = await performRequest({
    query: queryArticlesSameAuthor,
    variables: { eq: idAuthor },
  });
  console.log(articles);
  return (
    <>
      <DynamicListArticles
        articles={articles}
        columns="gap-x-2 grid-cols-2 sm:grid-cols-[200px_200px] md:grid-cols-3 lg:grid-cols-[276px_276px_276px] xl:grid-cols-[276px_276px_276px_276px]"
      />
    </>
  );
}
