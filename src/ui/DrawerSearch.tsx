import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import SliderArticles from "@/ui/SliderArticles";

export default function DrawerSearch({ articles }: any) {
  return (
    <>
      <DrawerHeader>
        <DrawerTitle>Find your article</DrawerTitle>
        <DrawerDescription>
          Find tag or type any keyword for see related articles
        </DrawerDescription>
        <SliderArticles articles={articles} slidePerView="6" />
      </DrawerHeader>
    </>
  );
}
