import ArticleCode from "./ArticleCode";
import ArticleHeading from "./ArticleHeading";
import ArticleParagraph from "./ArticleParagraph";

import { renderNodeRule, StructuredText } from "react-datocms";
import { isHeading, isCode, isLink } from "datocms-structured-text-utils";
import { render as toPlainText } from "datocms-structured-text-to-plain-text";
import SyntaxHighlight from "@/app/SyntaxHighlight";
import IconLink from "@/ui/svg/IconLink";
import IconLinkedTitle from "@/ui/svg/IconLinkedTitle";

type ContentElement = {
  type: string;
  level?: number;
  language?: string;
  children: { value: string }[];
  code?: string;
};

type ArticleContentProps = {
  content: {
    value: {
      document: {
        type: string;
        children: ContentElement[];
      };
    };
  };
};

export default function ArticleContent({ content }: ArticleContentProps) {
  console.log(content);
  return (
    <div className="structured_text mb-20">
      <StructuredText
        data={content}
        customNodeRules={[
          renderNodeRule(isHeading, ({ node, children, key }) => {
            if (!node) return null;
            const anchor =
              node !== null
                ? toPlainText(node)
                    ?.toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^\w-]+/g, "")
                : "";
            const content = (
              <>
                {children}
                <a href={`#${anchor}`}>
                  <IconLinkedTitle />
                </a>
              </>
            );
            const classtitle = "flex items-center gap-4";
            if (node.level === 1)
              return (
                <h1 className={`${classtitle}`} id={anchor}>
                  {content}
                </h1>
              );
            if (node.level === 2)
              return (
                <h2 className={`${classtitle}`} id={anchor}>
                  {content}
                </h2>
              );
            if (node.level === 3)
              return (
                <h3 className={`${classtitle}`} id={anchor}>
                  {content}
                </h3>
              );
          }),
          renderNodeRule(isCode, ({ node, key }) => {
            return (
              <SyntaxHighlight
                key={key}
                code={node.code}
                language={node.language}
                linesToBeHighlighted={node.highlight}
                className="text-xs"
              />
            );
          }),
          renderNodeRule(isLink, ({ node, key, children }) => {
            console.log(node.meta);
            const targetBlank = node.meta?.some(
              (metaEntry) =>
                metaEntry.id === "target" && metaEntry.value === "_blank"
            );
            const target = targetBlank ? "_blank" : "_self";
            const rel = targetBlank ? "noopener noreferrer" : undefined;
            return (
              <a
                key={key}
                href={node.url}
                target={target}
                rel={rel}
                className="inline-flex items-center gap-2 w-max pl-1 text-blue-500 hover:underline"
              >
                <IconLink />
                {children}
              </a>
            );
          }),
        ]}
      />
    </div>
  );
}
