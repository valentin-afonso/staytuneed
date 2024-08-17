type ParagrapheProps = {
  children: React.ReactNode;
};

export default function ArticleParagraph({ children }: ParagrapheProps) {
  return <p>{children}</p>;
}
