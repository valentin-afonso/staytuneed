import FooterNav from "@/ui/FooterNav";
import Bottom from "@/ui/Bottom";
import Socials from "@/ui/Socials";
import GridLayout from "@/ui/GridLayout";
import Wave from "@/ui/svg/Wave";

export default function Footer() {
  return (
    <footer className="relative flex flex-col">
      <div className="top_line">
        <Wave />
      </div>
      <GridLayout
        size="boxed"
        additional_class=" flex flex-col w-full gap-8 lg:pb-12"
      >
        <div className="flex justify-between w-full gap-8">
          <FooterNav />
          <Socials />
        </div>
        <div className="text-center text-black/60 text-sm font-medium">
          Built with ❤️ by{" "}
          <a href="https://valafso.com" target="_blank">
            valafso.com
          </a>
        </div>
      </GridLayout>
      <Bottom />
    </footer>
  );
}
