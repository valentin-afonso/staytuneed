import { performRequest } from "@/lib/datocms";
import { queryAllAuthors } from "@/cms/queries/queryAllAuthors";
import CardAuthor from "@/ui/CardAuthor";

export default async function ListCardAuthor() {
  const { allAuthors } = await performRequest({ query: queryAllAuthors });
  if (!allAuthors) return;
  const list_author = allAuthors.map((author: any) => (
    <CardAuthor key={author.id} author={author} />
  ));
  return (
    <div className="flex flex-wrap flex-row-reverse justify-end gap-4">
      {list_author}
    </div>
  );
}
