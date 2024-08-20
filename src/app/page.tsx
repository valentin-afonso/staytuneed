import { performRequest } from "@/lib/datocms";
import { queryHomePage } from "@/cms/queries/queryHomePage";
import HeroSection from "@/ui/HeroSection";
import SectionLastArticle from "@/ui/SectionLastArticle";
import SectionFaq from "@/ui/SectionFaq";

export default async function Home() {
  const { homePage } = await performRequest({ query: queryHomePage });
  if (!homePage) return <div>...</div>;
  const title_double = homePage?.titleDouble;
  const slogan = homePage?.introText;
  return (
    <div>
      <HeroSection title={title_double} slogan={slogan} />
      <SectionLastArticle />
      <SectionFaq />
    </div>
  );
}
