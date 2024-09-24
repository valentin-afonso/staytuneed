"use client";

import IconSearch from "@/ui/svg/IconSearch";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import DrawerSearch from "@/ui/DrawerSearch";
import { useState, useEffect, useRef } from "react";
import IconClose from "@/ui/svg/IconClose";
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import GridLayout from "@/ui/GridLayout";

export default function SearchBar({ articles }: any) {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const drawerContentRef = useRef<HTMLDivElement>(null);

  const filteredArticles = articles.filter((article: any) => {
    const searchLower = searchText.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.teaser.toLowerCase().includes(searchLower) ||
      article.tags.some((tag: any) =>
        tag.libelle.toLowerCase().includes(searchLower)
      )
    );
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerContentRef.current &&
        !drawerContentRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      const timeoutId = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  return (
    <Drawer open={open}>
      <DrawerTrigger asChild onClick={() => setOpen(true)}>
        <div className="searchbar_trigger relative flex justify-between items-center mt-8 md:mt-12 mx-auto w-[576px] max-w-full bg-white shadow-light hover:shadow-md border border-gray-border rounded-full py-2 px-5 pr-4 cursor-pointer">
          <p className="text-gray-400">Find a article...</p>
          <IconSearch />
        </div>
      </DrawerTrigger>
      <DrawerContent className="px-4 md:px-20 py-4" ref={drawerContentRef}>
        <DrawerClose
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4"
        >
          <IconClose />
        </DrawerClose>

        <DrawerHeader className="text-left">
          <div className="w-full md:w-[600px] max-w-full mx-auto ">
            <DrawerTitle>Find your article</DrawerTitle>
            <DrawerDescription>
              Find tag or type any keyword for see related articles
            </DrawerDescription>
            <div className=" flex justify-between items-center my-4 shadow-light border border-gray-border rounded-full pr-4">
              <input
                type="text"
                placeholder="Tap something..."
                className="flex-grow py-2 px-4 bg-transparent focus:outline-none "
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                ref={inputRef}
              />
              <IconSearch />
            </div>
          </div>
        </DrawerHeader>

        <DrawerSearch articles={filteredArticles} />
      </DrawerContent>
    </Drawer>
  );
}
