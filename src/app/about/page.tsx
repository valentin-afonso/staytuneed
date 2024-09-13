import BlocBreadcrumb from "@/ui/BlocBreadcrumb";

export default function page() {
  const three = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
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
        name: "About",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlocBreadcrumb items={three} />
    </>
  );
}
