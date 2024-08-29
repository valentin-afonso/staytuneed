import useFormattedDate from "@/hooks/useFormattedDate";

export default function DateArticle({ date }: any) {
  const formattedDate = useFormattedDate(date);
  return (
    <p className="text-gray-light text-xs">Published on {formattedDate}</p>
  );
}
