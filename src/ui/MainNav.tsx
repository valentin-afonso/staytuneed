import { performRequest } from "@/lib/datocms";
import { queryHeader } from "@/cms/queries/queryHeader";
import NavLink from "@/ui/NavLink";

export default async function MainNav() {
  const { header } = await performRequest({ query: queryHeader });
  if (!header) return <div>...</div>;

  const listLinks = header.navigation.map((item: any) => (
    <li key={item.id}>
      <NavLink name={item.navigationLabel} href={item.page.slug} />
    </li>
  ));

  return (
    <nav>
      <ul className="flex justify-center gap-6">{listLinks}</ul>
    </nav>
  );
}
