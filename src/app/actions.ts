"use server";
import { revalidatePath } from "next/cache";
import { performRequest } from "@/lib/datocms";
import { queryBlogs } from "@/cms/queries/queryBlogs";

export async function getFilteredArticles(tags: String[], skip: Number) {
  const { allArticles } = await performRequest({
    query: queryBlogs,
    variables: {
      tags: {
        anyIn: tags,
      },
      skip: skip,
      first: 16,
    },
  });
  // eturn allArticles;
  const totalArticles = allArticles.length;
  return { articles: allArticles, total: totalArticles };
  // revalidatePath("/blog");
}
