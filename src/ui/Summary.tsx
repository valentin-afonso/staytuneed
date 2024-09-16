"use client";

import { selectAll } from "unist-util-select";
import { useEffect, useState } from "react";
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

  const [activeId, setActiveId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculer la progression du scroll
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / totalScrollHeight) * 100;
      setScrollProgress(scrollPercentage);

      // Gérer l'activation des titres dans le sommaire
      const headingElements = headings.map((heading) =>
        document.getElementById(heading.id)
      );

      headingElements.forEach((headingEl) => {
        if (headingEl) {
          const rect = headingEl.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight &&
            rect.bottom >= window.innerHeight
          ) {
            setActiveId(headingEl.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  const handleClick = (id: string) => {
    // Mettre à jour l'élément actif lors du clic
    setActiveId(id);

    // Défilement fluide vers l'élément
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="fixed left-5 top-0 bottom-0 flex items-center pr-6 max-[1400px]:hidden ">
        {/* Progress bar */}
        <div className="relative h-20 w-1 rounded-full bg-gray-200">
          <div
            className="absolute top-0 left-0 w-full rounded-full bg-black"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Summary */}
        <ul className="summary flex flex-col gap-2 pl-5">
          {headings.map((heading) => (
            <li key={heading.id} className={`level-${heading.level}`}>
              <a
                href={`#${heading.id}`}
                className={`inline-block text-xs leading-normal ${
                  activeId === heading.id
                    ? "text-black font-bold"
                    : "text-gray-light"
                }`}
                onClick={() => handleClick(heading.id)}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
