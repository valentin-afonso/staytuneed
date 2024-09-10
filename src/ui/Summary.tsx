import { selectAll } from "unist-util-select";
interface Heading {
  text: string;
  level: number;
  id: string;
}

export default function Summary({ content }: any) {
  const headingNodes = selectAll("heading", content.value.document);
  const headings: Heading[] = headingNodes.map((node: any) => {
    const textNode = node.children.find((n: any) => n.type === "span");
    const text = textNode ? textNode.value : "";
    const level = node.depth || 2;
    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    return { text, level, id };
  });

  return (
    <>
      <ul className="summary fixed left-8 flex flex-col gap-4 pr-14">
        {headings.map((heading) => (
          <li key={heading.id} className={`level-${heading.level}`}>
            <a href={`#${heading.id}`} className="text-gray-light">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
