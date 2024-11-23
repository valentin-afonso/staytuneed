import { performRequest } from "@/lib/datocms";
import { queryBlogs } from "@/cms/queries/queryBlogs";

export default async function FilterCount({ tagId }: any) {
  const { allArticles } = await performRequest({
    query: queryBlogs,
    variables: {
      tags: {
        anyIn: tagId,
      },
    },
    revalidate: 3600,
  });
  const count = allArticles?.length || 0;
  if (count === 0) {
    return;
  }
  return (
    <div className="bg_blur text-gray-light w-4 h-4 rounded-full text-[10px] flex items-center justify-center">
      {count}
    </div>
  );
}
