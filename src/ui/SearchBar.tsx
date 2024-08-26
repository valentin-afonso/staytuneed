"use client";

import IconSearch from "@/ui/svg/IconSearch";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerFooter,
  DrawerOverlay,
} from "@/components/ui/drawer";
import DrawerSearch from "@/ui/DrawerSearch";
import { useState } from "react";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer dismissible={true} modal={false} handleOnly={true} open={open}>
      <DrawerTrigger asChild onClick={() => setOpen(true)}>
        <div className=" flex justify-between items-center mt-12 mb-28 shadow-light border-gray-border rounded-full pr-4">
          <input
            type="text"
            placeholder="Tap something..."
            className="flex-grow py-2 px-4 focus:outline-none"
          />

          <IconSearch />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerSearch />
        <DrawerFooter>
          <DrawerClose onClick={() => setOpen(false)}>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
