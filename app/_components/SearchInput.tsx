"use client";
import { Input } from "@/components/ui/input";
import { useStore } from "@/lib/store";
import { Search } from "lucide-react";
import React, { useRef } from "react";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setSearchText } = useStore();
  return (
    <form
      className="relative w-full mx-3"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <Input
        ref={ref}
        placeholder="search games...."
        className="w-full rounded-full bg-primary-foreground"
      />
      <Search className="absolute top-1 right-2" />
    </form>
  );
};

export default SearchInput;
