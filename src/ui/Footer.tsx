import FooterNav from "@/ui/FooterNav";
import Bottom from "@/ui/Bottom";
import Socials from "@/ui/Socials";
import GridLayout from "@/ui/GridLayout";
import Wave from "@/ui/svg/Wave";
import IconLogoFooter from "@/ui/svg/IconLogoFooter";

export default function Footer() {
  return (
    <footer className="relative mt-[25rem]">
      <Wave />
      <GridLayout
        size="boxed"
        additional_class="flex justify-between gap-8 pb-12"
      >
        <FooterNav />
        <Socials />
      </GridLayout>
      <Bottom />
    </footer>
  );
}
