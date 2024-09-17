import TitleDouble from "@/ui/TitleDouble";
import GridLayout from "@/ui/GridLayout";
import Slogan from "@/ui/Slogan";
import BlocSearchBar from "@/ui/BlocSearchBar";
import Sketch from "@/ui/svg/Sketch";

export default function HeroSection({ title, slogan }: any) {
  return (
    <GridLayout size="boxed" additional_class="relative mb-32">
      <TitleDouble
        first={title.firstPart}
        second={title.secondPart}
        level="1"
        align="center"
      />
      <BlocSearchBar />
      <Slogan text={slogan} />
      <Sketch />
    </GridLayout>
  );
}
