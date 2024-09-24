import useFormattedDate from "@/hooks/useFormattedDate";

export default function DateArticle({ date, updatedAt }: any) {
  const formattedDate = useFormattedDate(date);
  const formattedUpdatedAt = useFormattedDate(updatedAt);
  return (
    <p className="text-gray-light text-xs flex items-center flex-wrap gap-2">
      <span>created at {formattedDate}</span> •
      <span>updated at {formattedUpdatedAt}</span>
    </p>
  );
}
