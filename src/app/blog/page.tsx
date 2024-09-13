import BlocSearchBar from "@/ui/BlocSearchBar";
import BlocArticlesList from "@/ui/BlocArticlesList";
import GridLayout from "@/ui/GridLayout";
import BlocBreadcrumb from "@/ui/BlocBreadcrumb";

export default function page() {
  const three = [
    { url: "/", title: "Home" },
    { url: "/blog", title: "Blog" },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://staytuneed.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GridLayout size="boxed" additional_class="">
        <BlocBreadcrumb items={three} />
        <h1 className="font-black text-4xl text-center">
          Find Exactly What You Need
        </h1>
        <BlocSearchBar />
        <BlocArticlesList />
      </GridLayout>
    </>
  );
}
