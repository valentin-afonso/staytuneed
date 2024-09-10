import { performRequest } from "@/lib/datocms";
import { queryArticlesSameAuthor } from "@/cms/queries/queryArticlesSameAuthor";
import SliderArticles from "@/ui/SliderArticles";

export default async function SectionArticlesSameAuthor({ id_author }: any) {
  const { allArticles } = await performRequest({
    query: queryArticlesSameAuthor,
    variables: { id_author },
  });
  if (!allArticles) return null;
  return (
    <div>
      <h2 className="text-2xl font-medium mt-8">From the same author</h2>
      <SliderArticles articles={allArticles} slidePerView="3" />
    </div>
  );
}
