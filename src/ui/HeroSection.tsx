import { performRequest } from "@/lib/datocms";
import { queryHomePage } from "@/cms/queries/queryHomePage";
import TitleDouble from "@/ui/TitleDouble";
import GridLayout from "@/ui/GridLayout";
import SearchBar from "@/ui/SearchBar";
import Slogan from "@/ui/Slogan";

export default async function HeroSection() {
  const { homePage } = await performRequest({ query: queryHomePage });
  if (!homePage) return <div>...</div>;
  const title_double = homePage?.titleDouble;
  const slogan = homePage?.introText;
  return (
    <GridLayout size="boxed" additional_class="">
      <TitleDouble
        first={title_double.firstPart}
        second={title_double.secondPart}
        level="1"
        align="center"
      />
      <SearchBar />
      <Slogan text={slogan} />
    </GridLayout>
  );
}
