import GridLayout from "@/ui/GridLayout";
import { performRequest } from "@/lib/datocms";
import { queryFaq } from "@/cms/queries/queryFaq";
import BlocFaq from "./BlocFaq";
import TitleSecond from "./TitleSecond";

export default async function SectionFaq() {
  const { allFaqItems } = await performRequest({ query: queryFaq });
  if (!allFaqItems) return <div>...</div>;

  return (
    <GridLayout size="boxed" additional_class="w-full">
      <TitleSecond>Your Questions, Answered</TitleSecond>
      <BlocFaq items={allFaqItems} />
    </GridLayout>
  );
}
