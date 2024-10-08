import { performRequest } from "@/lib/datocms";
import { queryHomePage } from "@/cms/queries/queryHomePage";
import HeroSection from "@/ui/HeroSection";
import SectionLastArticle from "@/ui/SectionLastArticle";
import SectionFavouriteArticle from "@/ui/SectionFavouriteArticle";
import SectionFaq from "@/ui/SectionFaq";
import SectionImageText from "@/ui/SectionImageText";

export async function generateMetadata() {
  return {
    robots: "index,follow",
  };
}

export default async function Home() {
  const { homePage } = await performRequest({ query: queryHomePage });
  if (!homePage) return <div>...</div>;
  const title_double = homePage?.titleDouble;
  const slogan = homePage?.introText;
  return (
    <>
      <HeroSection title={title_double} slogan={slogan} />
      <SectionLastArticle />
      <SectionImageText />
      <SectionFavouriteArticle />
      <SectionFaq />
    </>
  );
}
