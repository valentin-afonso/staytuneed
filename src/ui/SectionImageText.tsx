import BlogGradient from "@/ui/svg/BlogGradient";
import GridLayout from "@/ui/GridLayout";
import TitleSecond from "@/ui/TitleSecond";
import Image from "next/image";

export default function SectionImageText() {
  return (
    <GridLayout
      size="boxed"
      additional_class="w-full flex justify-between items-center mb-16"
    >
      <div className="flex flex-col max-w-[432px] gap-4">
        <TitleSecond>Explore the unknown</TitleSecond>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-1">
        <BlogGradient />
        <Image
          src="/img-articles.png"
          width={586}
          height={810}
          alt="Picture of articles"
          className="col-start-1 col-end-1 row-start-1 row-end-1"
        />
      </div>
    </GridLayout>
  );
}
