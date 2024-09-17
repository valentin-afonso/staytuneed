import { performRequest } from "@/lib/datocms";
import { queryFooter } from "@/cms/queries/queryFooter";
import { queryBottom } from "@/cms/queries/queryBottom";
import NavLink from "@/ui/NavLink";
import TitleFooter from "@/ui/TitleFooter";

export default async function FooterNav() {
  const { footer } = await performRequest({ query: queryFooter });
  const { bottom } = await performRequest({ query: queryBottom });
  if (!footer) return null;
  if (!bottom) return null;
  const listLinks = footer.footerNavigation.map((item: any) => (
    <li key={item.id}>
      <NavLink name={item.navigationLabel} href={item.page.slug} />
    </li>
  ));
  const listLinksBottom = bottom.navigation.map((item: any) => (
    <li key={item.id}>
      <NavLink name={item.navigationLabel} href={item.page.slug} />
    </li>
  ));
  return (
    <div className="flex flex-col gap-2">
      <TitleFooter>Menu</TitleFooter>
      <div className="flex gap-14">
        <nav>
          <ul>{listLinks}</ul>
        </nav>
        <nav>
          <ul>{listLinksBottom}</ul>
        </nav>
      </div>
    </div>
  );
}
