"use client";

import { Highlight, themes } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/nightOwl";

export default function SyntaxHighlight({
  code,
  language,
  linesToBeHighlighted,
}: any) {
  return (
    <div>
      <Highlight theme={themes.dracula} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className="p-4 my-4">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
