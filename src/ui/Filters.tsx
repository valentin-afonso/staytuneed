import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Filters({ tags, selectedTags, setSelectedTags }: any) {
  const handleToggle = (value: string) => {
    if (selectedTags.includes(value)) {
      setSelectedTags(selectedTags.filter((tag: any) => tag !== value));
    } else {
      setSelectedTags([...selectedTags, value]);
    }
  };

  const list_tags = tags.map((tag: any) => (
    <ToggleGroupItem
      value={tag.libelle}
      key={tag.id}
      onClick={() => handleToggle(tag.libelle)}
    >
      {tag.libelle}
    </ToggleGroupItem>
  ));
  return (
    <ToggleGroup type="multiple" size="sm" className="mb-4">
      {list_tags}
    </ToggleGroup>
  );
}
