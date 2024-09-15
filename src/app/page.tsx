import { performRequest } from "@/lib/datocms";
import { queryHomePage } from "@/cms/queries/queryHomePage";
import HeroSection from "@/ui/HeroSection";
import SectionLastArticle from "@/ui/SectionLastArticle";
import SectionFavouriteArticle from "@/ui/SectionFavouriteArticle";
import SectionFaq from "@/ui/SectionFaq";

export async function generateMetadata() {
  return {
    robots: "index,follow",
    openGraph: {
      title: "Staytuneed",
      description:
        "Welcome to Staytuneed, your friendly hub for everything tech, design, and web development! Whether you're diving into React, Next.js, or JavaScript, or looking for the latest design tips and tech news, we've got you covered. Our easy-to-follow tutorials, expert advice, and creative inspiration are here to help developers and designers of all levels grow their skills and stay ahead in the ever-changing world of tech. Stay tuned for content that makes learning fun and keeps you in the know!",
      images: [
        {
          url: "https://www.staytuneed.com/twitter-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: "Staytuneed",
      description:
        "Welcome to Staytuneed, your friendly hub for everything tech, design, and web development! Whether you're diving into React, Next.js, or JavaScript, or looking for the latest design tips and tech news, we've got you covered. Our easy-to-follow tutorials, expert advice, and creative inspiration are here to help developers and designers of all levels grow their skills and stay ahead in the ever-changing world of tech. Stay tuned for content that makes learning fun and keeps you in the know!",
      card: "summary_large_image",
      image: "https://www.staytuneed.com/twitter-image.jpg",
    },
  };
}

export default async function Home() {
  const { homePage } = await performRequest({ query: queryHomePage });
  if (!homePage) return <div>...</div>;
  const title_double = homePage?.titleDouble;
  const slogan = homePage?.introText;
  return (
    <div>
      <HeroSection title={title_double} slogan={slogan} />
      <SectionLastArticle />
      <SectionFavouriteArticle />
      <SectionFaq />
    </div>
  );
}
