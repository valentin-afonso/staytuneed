"use client";

import IconSearch from "@/ui/svg/IconSearch";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import DrawerSearch from "@/ui/DrawerSearch";
import { useState, useEffect } from "react";
import IconClose from "@/ui/svg/IconClose";

export default function SearchBar({ articles }: any) {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    const filtered = articles.filter((article: any) => {
      const searchLower = searchText.toLowerCase();
      return (
        article.title.toLowerCase().includes(searchLower) ||
        article.teaser.toLowerCase().includes(searchLower) ||
        article.tags.some((tag: any) =>
          tag.libelle.toLowerCase().includes(searchLower)
        )
      );
    });

    setFilteredArticles(filtered);
  }, [searchText, articles]);

  return (
    <Drawer dismissible={true} modal={false} handleOnly={true} open={open}>
      <DrawerTrigger asChild onClick={() => setOpen(true)}>
        <div className=" flex justify-between items-center mt-12 mb-28 shadow-light border-gray-border rounded-full pr-4">
          <input
            type="text"
            placeholder="Tap something..."
            className="flex-grow py-2 px-4 focus:outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <IconSearch />
        </div>
      </DrawerTrigger>
      <DrawerContent className="px-10 py-4">
        <DrawerClose
          onClick={() => setOpen(false)}
          className="flex justify-end"
        >
          <IconClose />
        </DrawerClose>
        <DrawerSearch articles={filteredArticles} />
      </DrawerContent>
    </Drawer>
  );
}
