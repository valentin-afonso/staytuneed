import FooterNav from "@/ui/FooterNav";
import Bottom from "@/ui/Bottom";
import Socials from "@/ui/Socials";
import GridLayout from "@/ui/GridLayout";
import Wave from "@/ui/svg/Wave";
import IconLogoFooter from "@/ui/svg/IconLogoFooter";

export default function Footer() {
  return (
    <footer className="relative flex flex-col">
      <div className="top_line">
        <Wave />
      </div>
      <GridLayout
        size="boxed"
        additional_class=" flex justify-between w-full gap-8 lg:pb-12"
      >
        <FooterNav />
        <Socials />
      </GridLayout>
      <Bottom />
    </footer>
  );
}
