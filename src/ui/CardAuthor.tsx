import Image from "next/image";
import Link from "next/link";

//  url={`/blog/author/${article.author.slug}`}
export default function CardAuthor({ author }: any) {
  return (
    <Link
      href={`/blog/author/${author.slug}`}
      className="card flex gap-4 p-4 rounded-md h-28 w-full md:w-80 max-w-full shadow-light hover:shadow-md"
    >
      <Image
        src={author?.pictureProfil.url}
        width={500}
        height={500}
        alt={author?.pictureProfil.alt}
        placeholder="blur"
        blurDataURL={author?.pictureProfil.blurUpThumb}
        className="rounded-full w-12 max-w-12  h-12 border-white border-2"
      />
      <div>
        <p>
          {author.firstname} {author.lastname}
        </p>
        <p className="text-sm text-gray-light">{author.social}</p>
      </div>
    </Link>
  );
}
