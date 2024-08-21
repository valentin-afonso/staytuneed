import IconSearch from "@/ui/svg/IconSearch";
export default function SearchBar() {
  return (
    <div className=" flex justify-between items-center mt-12 mb-28 shadow-light border-gray-border rounded-full pr-4">
      <input
        type="text"
        placeholder="Tap something..."
        className="flex-grow py-2 px-4 focus:outline-none"
      />
      <IconSearch />
    </div>
  );
}
