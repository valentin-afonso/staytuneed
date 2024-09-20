import BlogGradient from "@/ui/svg/BlogGradient";
import GridLayout from "@/ui/GridLayout";
import TitleSecond from "@/ui/TitleSecond";
import Image from "next/image";
import ButtonPrimary from "@/ui/ButtonPrimary";
import Tag from "@/ui/Tag";

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
        <ButtonPrimary url="/about" additional_class="">
          learn more
        </ButtonPrimary>
      </div>
      <div className="relative grid grid-cols-2 grid-rows-[auto_auto] gap-2">
        <BlogGradient />
        <div className="relative flex justify-between bg_blur col-start-1 col-end-3 row-start-1 row-end-1 h-60 rounded-sm overflow-hidden">
          <div className="flex flex-col gap-2 max-w-[50%] p-4 ">
            <TitleSecond>Explore the unknown</TitleSecond>
            <p>
              Stay on top of the latest technologies and trends in the digital
              world, and never miss out on any important updates !
            </p>
          </div>
          <Image
            src="/img-articles-2.png"
            width={586}
            height={810}
            alt="Picture of articles"
            className="w-auto h-[111%] translate-x-[18px] translate-y-[-8px]"
          />
        </div>
        <div className="relative flex justify-between bg_blur col-start-1 col-end-2 row-start-2 row-end-3 h-60 rounded-sm overflow-hidden">
          <div className="flex flex-col gap-2 p-4">
            <TitleSecond>Crafted with a Human Touch</TitleSecond>
            <p>
              Some articles come from authors, some from AI. When they team up,
              you get the best of both worlds !
            </p>
          </div>
          <div></div>
        </div>
        <div className="relative flex flex-col justify-end bg_blur col-start-2 col-end-3 row-start-2 row-end-3 h-60 rounded-sm overflow-hidden">
          <ul className="flex items-end justify-center flex-wrap gap-2">
            <li className="rotate-[335deg] translate-y-[-34px]">
              <Tag libelle="react" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px]">
              <Tag libelle="next" />
            </li>
            <li className="translate-y-[-70px]">
              <Tag libelle="design" />
            </li>
            <li className="rotate-[335deg] translate-y-[-34px]">
              <Tag libelle="tailwind" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px]">
              <Tag libelle="api" />
            </li>
            <li className="translate-y-[-70px]">
              <Tag libelle="python" />
            </li>
            <li className="rotate-[335deg] translate-y-[-34px]">
              <Tag libelle="github" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px]">
              <Tag libelle="php" />
            </li>
            <li className="translate-y-[-70px]">
              <Tag libelle="framework" />
            </li>
            <li className="rotate-[335deg] translate-y-[-34px]">
              <Tag libelle="vercel" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px]">
              <Tag libelle="database" />
            </li>
            <li className="translate-y-[-70px]">
              <Tag libelle="freelance" />
            </li>
            <li className="rotate-[335deg] translate-y-[-34px]">
              <Tag libelle="react" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px]">
              <Tag libelle="next" />
            </li>
            <li className="translate-y-[-70px]">
              <Tag libelle="security" />
            </li>
            <li className="rotate-[26deg] translate-y-[-24px]">
              <Tag libelle="ai" />
            </li>
            <li className="rotate-[34deg] translate-y-[-16px]">
              <Tag libelle="javascript" />
            </li>
            <li className="rotate-[331deg] translate-y-[-14px]">
              <Tag libelle="web 2.0" />
            </li>
            <li className="rotate-[18deg] translate-y-[-12px]">
              <Tag libelle="performance" />
            </li>
          </ul>
          <div className="p-4 text-center">
            <TitleSecond>Unlimited topics</TitleSecond>
          </div>
        </div>
      </div>
    </GridLayout>
  );
}
