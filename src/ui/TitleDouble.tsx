export default function TitleDouble({ first, second, level, align }: any) {
  let class_align = "justify-start text-right";
  if (align === "center") {
    class_align = "justify-center text-center";
  }
  const class_title = `flex flex-col ${class_align}`;
  const content = (
    <>
      <span>{first}</span>
      <span>{second}</span>
    </>
  );
  if (level === "1") {
    return (
      <h1
        className={`${class_title} font-black text-2xl sm:text-3xl md:text-4xl`}
      >
        {content}
      </h1>
    );
  }
  if (level === "2") {
    return <h2 className={`${class_title}`}>{content}</h2>;
  }
}
