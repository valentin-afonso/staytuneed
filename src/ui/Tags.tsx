import Tag from "./Tag";
export default function Tags({ tags }: any) {
  const listTags = tags.map((tag: any) => (
    <Tag key={tag.id} libelle={tag.libelle} />
  ));
  return <div className="flex items-center gap-2">{listTags}</div>;
}
