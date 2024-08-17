type HeadingProps = {
  level: number;
  children: React.ReactNode;
};

export default function ArticleHeading({ level, children }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag>{children}</Tag>;
}
