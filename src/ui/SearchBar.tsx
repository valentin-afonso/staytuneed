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

export default function SearchBar({ articles }: any) {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const inputRef = useRef<HTMLInputElement>(null);
  const drawerContentRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerContentRef.current &&
        !drawerContentRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      // Ajouter l'écouteur d'événement seulement quand le Drawer est ouvert
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Nettoyer l'écouteur quand le Drawer se ferme
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (open && inputRef.current) {
      // Utiliser un délai pour laisser le temps au Drawer de s'ouvrir
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100); // 100ms est généralement suffisant
    }
  }, [open]);

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
            ref={inputRef}
          />

          <IconSearch />
        </div>
      </DrawerTrigger>
      <DrawerContent className="px-10 py-4" ref={drawerContentRef}>
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
