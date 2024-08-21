import { performRequest } from "@/lib/datocms";
import { queryFooter } from "@/cms/queries/queryFooter";
import NavLink from "@/ui/NavLink";

export default async function FooterNav() {
  const { footer } = await performRequest({ query: queryFooter });
  if (!footer) return <div>...</div>;
  const listLinks = footer.footerNavigation.map((item: any) => (
    <li key={item.id}>
      <NavLink name={item.navigationLabel} href={item.page.slug} />
    </li>
  ));
  return (
    <nav>
      <ul>{listLinks}</ul>
    </nav>
  );
}
