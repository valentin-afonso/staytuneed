import IconReadingTime from "@/ui/svg/IconReadingTime";

export default function ReadingTime({ time }: any) {
  return (
    <div className="flex justify-end">
      <div className="flex gap-1 text-gray-light text-xs whitespace-nowrap">
        <IconReadingTime />
        {time} min read
      </div>
    </div>
  );
}
