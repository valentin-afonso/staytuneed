import BlocSearchBar from "@/ui/BlocSearchBar";
import BlocArticlesList from "@/ui/BlocArticlesList";
import GridLayout from "@/ui/GridLayout";
import BlocBreadcrumb from "@/ui/BlocBreadcrumb";

export async function generateMetadata() {
  return {
    robots: "index,follow",
  };
}

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
      <GridLayout size="boxed" additional_class="max-md:pt-24">
        <BlocBreadcrumb items={three} />
        <h1 className="font-black text-2xl sm:text-3xl md:text-4xl text-center">
          Find Exactly What You Need
        </h1>
        <div className="mb-8 lg:mb-28">
          <BlocSearchBar />
        </div>
        <BlocArticlesList />
      </GridLayout>
    </>
  );
}
