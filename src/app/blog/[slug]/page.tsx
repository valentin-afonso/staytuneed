import { performRequest } from "@/lib/datocms";
import { queryBlog } from "@/cms/queries/queryBlog";
import GridLayout from "@/ui/GridLayout";
import BlocBreadcrumb from "@/ui/BlocBreadcrumb";
import { Toaster } from "sonner";
import ArticleDetail from "@/ui/ArticleDetail";
import { Suspense } from "react";
import ArticleSkeletin from "@/ui/ArticleSkeletin";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { article } = await performRequest({
    query: queryBlog,
    variables: { slug },
  });

  const seo = article.seo || [];
  const title =
    seo.find((s: any) => s.tag === "title")?.content || article.title;

  return {
    robots: "index,follow",
    title,
    description: seo.find((s: any) => s.attributes?.name === "description")
      ?.attributes?.content,
    openGraph: {
      title:
        seo.find((s: any) => s.attributes?.property === "og:title")?.attributes
          ?.content || article.title,
      description: seo.find(
        (s: any) => s.attributes?.property === "og:description"
      )?.attributes?.content,
      images: [
        {
          url:
            seo.find((s: any) => s.attributes?.property === "og:image")
              ?.attributes?.content || article.image.url,
          width:
            seo.find((s: any) => s.attributes?.property === "og:image:width")
              ?.attributes?.content || 1200,
          height:
            seo.find((s: any) => s.attributes?.property === "og:image:height")
              ?.attributes?.content || 630,
        },
      ],
    },
    twitter: {
      title:
        seo.find((s: any) => s.attributes?.name === "twitter:title")?.attributes
          ?.content || article.title,
      description: seo.find(
        (s: any) => s.attributes?.name === "twitter:description"
      )?.attributes?.content,
      card:
        seo.find((s: any) => s.attributes?.name === "twitter:card")?.attributes
          ?.content || "summary_large_image",
      image:
        seo.find((s: any) => s.attributes?.name === "twitter:image")?.attributes
          ?.content || article.image.url,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const three = [
    { url: "/", title: "Home" },
    { url: "/blog", title: "Blog" },
    { url: `/blog/${slug}`, title: slug },
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
        name: `${slug}`,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <GridLayout size="blog" additional_class="max-md:pt-24">
        <BlocBreadcrumb items={three} />
        <Suspense fallback={<ArticleSkeletin />}>
          <ArticleDetail slug={slug} />
        </Suspense>
        <Toaster />
      </GridLayout>
    </>
  );
}
