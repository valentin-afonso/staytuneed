import { performRequest } from "@/lib/datocms";
import { queryRelatedArticles } from "@/cms/queries/queryRelatedArticles";
import SliderArticles from "@/ui/SliderArticles";

interface Tag {
  libelle: string;
  id: string;
}

interface SectionRelatedArticlesProps {
  tags: Tag[];
}

export default async function SectionRelatedArticles({
  tags,
}: SectionRelatedArticlesProps) {
  const idsArray = tags.map((tag) => tag.id);
  const { allArticles } = await performRequest({
    query: queryRelatedArticles,
    variables: {
      tags: {
        anyIn: idsArray,
      },
    },
  });
  if (!allArticles) return <div>no article...</div>;

  return (
    <>
      <h2 className="text-2xl font-medium mt-8">You’ll love these too</h2>
      <SliderArticles articles={allArticles} slidePerView="3" />
    </>
  );
}
