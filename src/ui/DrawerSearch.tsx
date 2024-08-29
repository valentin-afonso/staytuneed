import SliderArticles from "@/ui/SliderArticles";

export default function DrawerSearch({ articles }: any) {
  return (
    <>
      <SliderArticles articles={articles} slidePerView="3" />
    </>
  );
}
