type GridLayoutType = {
  children: React.ReactNode;
  size: string;
  additional_class: string;
};

export default function GridLayout({
  children,
  size,
  additional_class,
}: GridLayoutType) {
  let layout_width = "max-w-[1176px]";
  if (size === "boxed") {
    layout_width = "max-w-[1176px]";
  }
  if (size === "blog") {
    layout_width = "max-w-[840px]";
  }
  if (size === "fullwidth") {
    layout_width = "max-w-[1440px]";
  }

  return (
    <div className={`${layout_width} m-auto 2xl:px-0 ${additional_class}`}>
      {children}
    </div>
  );
}
