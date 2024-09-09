"use client";

import { Highlight, themes } from "prism-react-renderer";
import IconCopyPast from "@/ui/svg/IconCopyPast";
import { toast } from "sonner";
// import theme from "prism-react-renderer/themes/nightOwl";

export default function SyntaxHighlight({
  code,
  language,
  linesToBeHighlighted,
}: any) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast("Code copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  return (
    <div className="relative">
      <div
        className="absolute right-4 top-4 cursor-pointer"
        onClick={handleCopy}
      >
        <IconCopyPast />
      </div>

      <Highlight theme={themes.dracula} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style} className="p-4 my-4 text-xs rounded">
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
