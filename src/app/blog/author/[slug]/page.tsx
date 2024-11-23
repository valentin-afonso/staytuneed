import GridLayout from "@/ui/GridLayout";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const three = [
    { url: "/", title: "Home" },
    { url: "/blog", title: "Blog" },
    { url: "/blog", title: "Author" },
    { url: `/blog/author/${slug}`, title: slug },
  ];
  return (
    <>
      <GridLayout size="boxed" additional_class="max-md:pt-24">
        <h1 className="font-black text-2xl sm:text-3xl md:text-4xl text-center">
          Find Exactly What You Need
        </h1>
      </GridLayout>
    </>
  );
}
