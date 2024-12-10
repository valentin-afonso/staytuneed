import { performRequest } from "@/lib/datocms";
import { queryAllAuthors } from "@/cms/queries/queryAllAuthors";
import Image from "next/image";

export default async function ListAuthor() {
  const { allAuthors } = await performRequest({ query: queryAllAuthors });
  if (!allAuthors) return;
  const list_author = allAuthors.map((author: any) => (
    <li key={author.id}>
      <Image
        src={author?.pictureProfil.url}
        width={500}
        height={500}
        alt={author?.pictureProfil.alt}
        placeholder="blur"
        blurDataURL={author?.pictureProfil.blurUpThumb}
        className="rounded-full w-12 max-w-12  h-12 border-white border-2"
      />
    </li>
  ));
  return (
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-center mt-8 md:mt-12 mb-4">
      <ul className="list_avatar flex justify-center items-center flex-row-reverse">
        {list_author}
      </ul>
      <p className="text-gray-light text-xs md:text-sm bg_blur rounded-sm px-4 py-1 shadow-light border border-white">
        🔥​ Currently, 2 engaged and enthusiastic editors.
      </p>
    </div>
  );
}
