import GridLayout from "@/ui/GridLayout";
import BlocBreadcrumb from "@/ui/BlocBreadcrumb";
import { performRequest } from "@/lib/datocms";
import { queryAuthor } from "@/cms/queries/queryAuthor";
import { Suspense } from "react";
import ArtilcListFromAuthor from "@/ui/ArtilcListFromAuthor";
import SkeletonArticles from "@/ui/SkeletonArticles";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const three = [
    { url: "/", title: "Home" },
    { url: "/blog", title: "Blog" },
    { url: "/blog/author", title: "Author" },
    { url: `/blog/author/${slug}`, title: slug },
  ];

  const jsonLdBreadcrumb = {
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
        item: "https://staytuneed.vercel.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Author",
        item: "https://staytuneed.vercel.app/blog/author",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${slug}`,
      },
    ],
  };

  const { author } = await performRequest({
    query: queryAuthor,
    variables: { slug },
  });

  const id_author = author.id;
  /*
          <a href={author.socialUrl} target="_blank">
            {author.social}
          </a>
*/
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <GridLayout size="boxed" additional_class="max-md:pt-24">
        <BlocBreadcrumb items={three} />
        <div className="flex flex-col items-center gap-4 mb-16">
          <Image
            src={author.pictureProfil?.url}
            width={author.pictureProfil?.width}
            height={author.pictureProfil?.height}
            alt={author.social}
            className="rounded-full w-16 h-16 object-cover"
          />
          <h1 className="font-black text-2xl sm:text-3xl md:text-4xl text-center">
            Whrite by {author.firstname} {author.lastname}
          </h1>
        </div>
        <Suspense fallback={<SkeletonArticles />}>
          <ArtilcListFromAuthor idAuthor={id_author} />
        </Suspense>
      </GridLayout>
    </>
  );
}
