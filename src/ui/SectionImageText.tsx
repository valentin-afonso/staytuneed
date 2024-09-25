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
      additional_class="w-full flex flex-col gap-8 lg:flex-row items-start justify-between lg:items-center lg:gap-0 mb-16"
    >
      <div className="flex flex-col max-w-[432px] gap-4">
        <TitleSecond>Explore the unknown</TitleSecond>
        <p className="pr-10">
          Ready for something new? Let’s dive into the places, ideas, and
          experiences that are waiting to be discovered. Whether it’s a hidden
          gem or a fresh perspective, we’re all about exploring beyond the
          usual. Join the adventure and see what surprises the web has in store
          for us!
        </p>
        <ButtonPrimary url="/about" additional_class="">
          learn more
        </ButtonPrimary>
      </div>
      <div className="relative grid grid-cols-2 grid-rows-[auto_auto_auto] sm:grid-rows-[auto_auto] gap-2">
        <BlogGradient />
        <div className="group relative flex justify-between bg_blur col-start-1 col-end-3 row-start-1 row-end-1 h-60 rounded-sm overflow-hidden">
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
            className="w-auto h-[111%] translate-x-[18px] translate-y-[-8px] group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700"
          />
        </div>
        <div className="relative flex justify-between bg_blur col-start-1 col-end-3 sm:col-end-2 row-start-2 row-end-3 h-60 sm:h-64 rounded-sm overflow-hidden">
          <div className="flex flex-col gap-2 p-4 justify-center items-center">
            <TitleSecond>Crafted with a Human Touch</TitleSecond>
            <p>
              Some articles come from authors, some from AI. When they team up,
              you get the best of both worlds !
            </p>
            <Image
              src="/img-author-ai.png"
              width={348}
              height={180}
              alt="Picture of articles"
              className="w-28 h-auto pt-2"
            />
          </div>
          <div></div>
        </div>
        <div className="group relative flex flex-col justify-end bg_blur col-start-1 sm:col-start-2 col-end-3 row-end-4 sm:row-start-2 sm:row-end-3 h-60 sm:h-64 rounded-sm overflow-hidden">
          <ul className="flex items-end justify-center flex-wrap gap-2">
            <li className="rotate-[335deg] translate-y-[-34px] opacity-50 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="react" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px] opacity-40 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="next" />
            </li>
            <li className="translate-y-[-70px] opacity-60 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="design" />
            </li>
            <li className="rotate-[335deg] translate-y-[-34px] opacity-60 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="tailwind" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px] opacity-60 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="api" />
            </li>
            <li className="translate-y-[-70px] opacity-60 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="python" />
            </li>
            <li className="rotate-[335deg] translate-y-[-34px] opacity-60 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="github" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px] opacity-60 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="php" />
            </li>
            <li className="translate-y-[-70px] opacity-60 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="framework" />
            </li>
            <li className="rotate-[335deg] translate-y-[-34px] opacity-60 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="vercel" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px] opacity-60 group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="database" />
            </li>
            <li className="translate-y-[-70px] group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="freelance" />
            </li>
            <li className="rotate-[335deg] translate-y-[-34px] group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="react" />
            </li>
            <li className="rotate-[347deg] translate-y-[-34px] group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="next" />
            </li>
            <li className="translate-y-[-70px] group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="security" />
            </li>
            <li className="rotate-[26deg] translate-y-[-24px] group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="ai" />
            </li>
            <li className="rotate-[34deg] translate-y-[-16px] group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="javascript" />
            </li>
            <li className="rotate-[331deg] translate-y-[-14px] group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
              <Tag libelle="web 2.0" />
            </li>
            <li className="rotate-[18deg] translate-y-[-12px] group-hover:translate-x-[0px] group-hover:translate-y-[-16px] transition ease-in-out duration-700">
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
