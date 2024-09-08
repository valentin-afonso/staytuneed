import Logo from "@/ui/Logo";
import MainNav from "@/ui/MainNav";
import GridLayout from "@/ui/GridLayout";

export default function Header() {
  return (
    <header className="">
      <GridLayout size="boxed" additional_class="flex justify-between py-4">
        <Logo />
        <MainNav />
      </GridLayout>
    </header>
  );
}
