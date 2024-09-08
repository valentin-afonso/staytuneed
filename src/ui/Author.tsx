import Image from "next/image";

export default function Author({ author }: any) {
  return (
    <div className="flex flex-col items-center mb-16">
      <p className="text-gray-light">written by</p>
      <Image
        src={author.pictureProfil?.url}
        width={author.pictureProfil?.width}
        height={author.pictureProfil?.height}
        alt={author.social}
        className="rounded-full w-16 h-16 object-cover"
      />
      <a href={author.socialUrl} target="_blank">
        {author.social}
      </a>
    </div>
  );
}
