import Link from "next/link";
import IconArrowRight from "@/ui/svg/IconArrowRight";

type ButtonPrimaryType = {
  children: React.ReactNode;
  url: string;
  additional_class: string;
};
export default function ButtonPrimary({
  children,
  url,
  additional_class,
}: ButtonPrimaryType) {
  return (
    <Link
      href={url}
      className={`relative link_primary flex items-center gap-3 ${additional_class} w-max px-4 py-1 rounded-sm bg-white border border-gray-border shadow-sm`}
    >
      {children}
      <IconArrowRight />
    </Link>
  );
}
