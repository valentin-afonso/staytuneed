import TitleDouble from "@/ui/TitleDouble";
import GridLayout from "@/ui/GridLayout";
import SearchBar from "@/ui/SearchBar";
import Slogan from "@/ui/Slogan";

export default function HeroSection({ title, slogan }: any) {
  return (
    <GridLayout size="boxed" additional_class="">
      <TitleDouble
        first={title.firstPart}
        second={title.secondPart}
        level="1"
        align="center"
      />
      <SearchBar />
      <Slogan text={slogan} />
    </GridLayout>
  );
}
