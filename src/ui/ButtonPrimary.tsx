import Link from "next/link";

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
      className={`${additional_class} px-4 py-1 rounded-sm bg-zinc-100 border hover:bg-zinc-200`}
    >
      {children}
    </Link>
  );
}
