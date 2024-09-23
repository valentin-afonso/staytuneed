import Marquee from "@/ui/Marquee";

export default function Slogan({ text }: any) {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        {text.split("\n").map((line: string, index: number) => (
          <p
            key={index}
            className="font-medium text-base sm:text-xl text-center opacity-80"
          >
            {line}
          </p>
        ))}
      </div>
      <Marquee />
    </div>
  );
}
