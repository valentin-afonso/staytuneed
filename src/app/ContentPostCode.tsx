"use client";

import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
interface IProps {
  code: string;
}
const ContentPostCode = ({ code }: any) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [code]);
  return <div dangerouslySetInnerHTML={{ __html: code }} />;
};
export default ContentPostCode;
