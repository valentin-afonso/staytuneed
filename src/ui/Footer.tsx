import FooterNav from "@/ui/FooterNav";
import Bottom from "@/ui/Bottom";
import Socials from "@/ui/Socials";
import GridLayout from "@/ui/GridLayout";

export default function Footer() {
  return (
    <footer className="p-4">
      <GridLayout
        size="boxed"
        additional_class="flex justify-between gap-8 pb-4"
      >
        <FooterNav />
        <Socials />
      </GridLayout>
      <Bottom />
    </footer>
  );
}
