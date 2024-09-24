import BlocBreadcrumb from "@/ui/BlocBreadcrumb";
import GridLayout from "@/ui/GridLayout";
import TitleDouble from "@/ui/TitleDouble";

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
      <GridLayout size="boxed" additional_class="max-md:pt-24">
        <BlocBreadcrumb items={three} />
        <TitleDouble
          first="Your Guide"
          second="to the Digital World"
          level="1"
          align="center"
        />
        <p className="mt-8">
          Welcome to Staytuneed! We&#39;re a team of tech enthusiasts and design
          lovers who are passionate about helping others explore the exciting
          world of web development, design, and emerging technologies. Whether
          you&#39;re learning the ropes with JavaScript and React, diving into
          the world of AI, or simply curious about the latest tools like Figma
          and Next.js, we’ve got you covered. Our goal is to make complex topics
          accessible and fun, while keeping you up to date with the trends that
          matter. Let’s learn, create, and innovate together!
        </p>
      </GridLayout>
    </>
  );
}
