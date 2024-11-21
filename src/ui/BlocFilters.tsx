import { performRequest } from "@/lib/datocms";
import { queryAllTags } from "@/cms/queries/queryTags";
import Filters from "@/ui/Filters";

export default async function BlocFilters() {
  const { allTags } = await performRequest({
    query: queryAllTags,
  });
  return (
    <>
      <Filters tags={allTags} />
    </>
  );
}
