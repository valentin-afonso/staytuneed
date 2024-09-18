import { performRequest } from "@/lib/datocms";
import { queryBottom } from "@/cms/queries/queryBottom";
import NavLink from "@/ui/NavLink";
import IconLogoFooter from "@/ui/svg/IconLogoFooter";
import IconLogoFooterGradient from "@/ui/svg/IconLogoFooterGradient";

export default async function Bottom() {
  const { bottom } = await performRequest({ query: queryBottom });
  if (!bottom) return <div>...</div>;

  const listLinks = bottom.navigation.map((item: any) => (
    <li key={item.id}>
      <NavLink name={item.navigationLabel} href={item.page.slug} />
    </li>
  ));
  /*
    <nav>
      <ul className="flex justify-center gap-6">{listLinks}</ul>
    </nav>
*/
  return (
    <div className="relative w-full h-24 overflow-hidden">
      <IconLogoFooterGradient />
      <IconLogoFooter />
    </div>
  );
}
