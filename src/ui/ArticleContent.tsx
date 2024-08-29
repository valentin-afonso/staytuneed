import ArticleCode from "./ArticleCode";
import ArticleHeading from "./ArticleHeading";
import ArticleParagraph from "./ArticleParagraph";

import { renderNodeRule, StructuredText } from "react-datocms";
import { isHeading, isCode } from "datocms-structured-text-utils";
import SyntaxHighlight from "@/app/SyntaxHighlight";

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
  /*
  const elements = content.value.document.children;
  const renderContent = (element: ContentElement) => {
    switch (element.type) {
      case "paragraph":
        return (
          <ArticleParagraph key={Math.random()}>
            {element.children.map((child) => child.value).join("")}
          </ArticleParagraph>
        );
      case "heading":
        return (
          <ArticleHeading key={Math.random()} level={element.level || 1}>
            {element.children.map((child) => child.value).join("")}
          </ArticleHeading>
        );
      case "code":
        return (
          <ArticleCode
            key={Math.random()}
            language={element.language || ""}
            code={element.code || ""}
          >
            {element.code || ""}
          </ArticleCode>
        );
      default:
        return null;
    }
  };
  */
  return (
    <div className="structured_text">
      {/**{elements.map((element) => renderContent(element))} */}
      <StructuredText
        data={content}
        customNodeRules={[
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
        ]}
      />
    </div>
  );
}
