import React from "react";

export default function NoArticle({ text }: any) {
  return (
    <div className="flex items-center justify-center p-4 text-gray-light text-xs min-h-[420px]">
      {text}
    </div>
  );
}
