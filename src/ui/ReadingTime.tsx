import IconReadingTime from "@/ui/svg/IconReadingTime";

export default function ReadingTime({ time }: any) {
  return (
    <div className="flex justify-end">
      <div className="flex gap-2 text-gray-light text-xs">
        <IconReadingTime />
        {time}min
      </div>
    </div>
  );
}
