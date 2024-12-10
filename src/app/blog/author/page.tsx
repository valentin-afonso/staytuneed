import ListCardAuthor from "@/ui/ListCardAuthor";
import GridLayout from "@/ui/GridLayout";
import { Suspense } from "react";
import SkeletonListCardAuthor from "@/ui/SkeletonListCardAuthor";
import BlocBreadcrumb from "@/ui/BlocBreadcrumb";

export async function generateMetadata() {
  return {
    robots: "index,follow",
  };
}

export default function Page() {
  const three = [
    { url: "/", title: "Home" },
    { url: "/blog", title: "Blog" },
    { url: "/blog/author", title: "Author" },
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
        item: "https://staytuneed.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Authors",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GridLayout size="boxed" additional_class="relative mb-32 mt-20">
        <BlocBreadcrumb items={three} />
        <h1 className="font-black text-2xl sm:text-3xl md:text-4xl text-center mb-8">
          The editors behind the blog
        </h1>
        <Suspense fallback={<SkeletonListCardAuthor />}>
          <ListCardAuthor />
        </Suspense>
      </GridLayout>
    </>
  );
}
