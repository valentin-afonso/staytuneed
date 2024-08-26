import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import SearchArticles from "@/ui/SearchArticles";

export default function DrawerSearch() {
  return (
    <>
      <DrawerHeader>
        <DrawerTitle>Find your article</DrawerTitle>
        <DrawerDescription>
          Find tag or type any keyword for see related articles{" "}
        </DrawerDescription>
      </DrawerHeader>
    </>
  );
}
