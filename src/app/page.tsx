import { performRequest } from "@/lib/datocms";
import { queryHomePage } from "@/cms/queries/queryHomePage";
import HeroSection from "@/ui/HeroSection";

export default async function Home() {
  const { homePage } = await performRequest({ query: queryHomePage });
  if (!homePage) return <div>...</div>;
  return (
    <div>
      <HeroSection />
    </div>
  );
}
