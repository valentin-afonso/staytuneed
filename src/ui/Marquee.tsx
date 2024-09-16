import IconFigma from "@/ui/svg/topics/IconFigma";
import IconGithub from "@/ui/svg/topics/IconGithub";
import IconJs from "@/ui/svg/topics/IconJs";
import IconNext from "@/ui/svg/topics/IconNext";
import IconReact from "@/ui/svg/topics/IconReact";
import IconVercel from "@/ui/svg/topics/IconVercel";

export default function Marquee() {
  return (
    <div className="max-w-full content_marquee relative flex overflow-hidden">
      <ul className="flex gap-12 animate-marquee whitespace-nowrap">
        <li className=" mx-4">
          <IconFigma />
        </li>
        <li className=" mx-4">
          <IconGithub />
        </li>
        <li className=" mx-4">
          <IconJs />
        </li>
        <li className=" mx-4">
          <IconNext />
        </li>
        <li className=" mx-4">
          <IconReact />
        </li>
        <li className=" mx-4">
          <IconVercel />
        </li>
      </ul>
      <ul className="flex gap-12 absolute top-0 animate-marquee2 whitespace-nowrap">
        <li className=" mx-4">
          <IconFigma />
        </li>
        <li className=" mx-4">
          <IconGithub />
        </li>
        <li className=" mx-4">
          <IconJs />
        </li>
        <li className=" mx-4">
          <IconNext />
        </li>
        <li className=" mx-4">
          <IconReact />
        </li>
        <li className=" mx-4">
          <IconVercel />
        </li>
      </ul>
    </div>
  );
}
