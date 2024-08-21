export default function Slogan({ text }: any) {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        {text.split("\n").map((line: string, index: number) => (
          <p key={index} className="font-medium text-xl text-center">
            {line}
          </p>
        ))}
      </div>

      <div>List logos</div>
    </div>
  );
}
