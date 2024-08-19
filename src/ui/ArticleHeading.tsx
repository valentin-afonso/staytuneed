type HeadingProps = {
  level: number;
  children: React.ReactNode;
};

export default function ArticleHeading({ level, children }: HeadingProps) {
  // const TagHeading = `h${level}` as keyof JSX.IntrinsicElements;
  return <h2>{children}</h2>;
}
