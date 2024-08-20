import GridLayout from "@/ui/GridLayout";
import { performRequest } from "@/lib/datocms";
import { queryFaq } from "@/cms/queries/queryFaq";
import BlocFaq from "./BlocFaq";

export default async function SectionFaq() {
  const { allFaqItems } = await performRequest({ query: queryFaq });
  if (!allFaqItems) return <div>...</div>;

  return (
    <GridLayout size="boxed" additional_class="">
      <h2>FAQ</h2>
      <BlocFaq items={allFaqItems} />
    </GridLayout>
  );
}
