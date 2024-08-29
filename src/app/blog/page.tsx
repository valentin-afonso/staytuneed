import BlocSearchBar from "@/ui/BlocSearchBar";
import BlocArticlesList from "@/ui/BlocArticlesList";
import GridLayout from "@/ui/GridLayout";

export default function page() {
  return (
    <GridLayout size="boxed" additional_class="">
      <BlocSearchBar />
      <BlocArticlesList />
    </GridLayout>
  );
}
