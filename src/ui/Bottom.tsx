import { performRequest } from "@/lib/datocms";
import { queryBottom } from "@/cms/queries/queryBottom";
import NavLink from "@/ui/NavLink";

export default async function Bottom() {
  const { bottom } = await performRequest({ query: queryBottom });
  if (!bottom) return <div>...</div>;

  const listLinks = bottom.navigation.map((item: any) => (
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
