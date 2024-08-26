import IconFigma from "@/ui/svg/topics/IconFigma";
import IconGithub from "@/ui/svg/topics/IconGithub";
import IconJs from "@/ui/svg/topics/IconJs";
import IconNext from "@/ui/svg/topics/IconNext";
import IconReact from "@/ui/svg/topics/IconReact";
import IconVercel from "@/ui/svg/topics/IconVercel";

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

      <ul className="flex gap-12">
        <li>
          <IconFigma />
        </li>
        <li>
          <IconGithub />
        </li>
        <li>
          <IconJs />
        </li>
        <li>
          <IconNext />
        </li>
        <li>
          <IconReact />
        </li>
        <li>
          <IconVercel />
        </li>
      </ul>
    </div>
  );
}
