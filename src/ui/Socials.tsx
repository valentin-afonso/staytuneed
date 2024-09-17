import IconX from "@/ui/svg/IconX";
import Link from "next/link";
import TitleFooter from "@/ui/TitleFooter";
export default function Socials() {
  return (
    <div className="flex flex-col gap-2">
      <TitleFooter>Socials</TitleFooter>
      <Link href="https://x.com/staytuneed_off" target="_blank" className="">
        <IconX />
      </Link>
    </div>
  );
}
