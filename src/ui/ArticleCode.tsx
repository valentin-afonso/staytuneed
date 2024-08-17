// import ContentPostCode from "@/app/ContentPostCode";
type CodeProps = {
  language: string;
  code: string;
  children: React.ReactNode;
};

export default function ArticleCode({ language, code, children }: CodeProps) {
  // const highlighted_code = ContentPostCode(code);
  return (
    <div>
      code {language} {children}
    </div>
  );
}
