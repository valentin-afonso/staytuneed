import GridLayout from "@/ui/GridLayout";
import { performRequest } from "@/lib/datocms";
import { queryFaq } from "@/cms/queries/queryFaq";

export default async function SectionFaq() {
  const { allFaqItems } = await performRequest({ query: queryFaq });
  if (!allFaqItems) return <div>...</div>;

  return (
    <GridLayout size="boxed" additional_class="">
      <h2>FAQ</h2>
    </GridLayout>
  );
}
