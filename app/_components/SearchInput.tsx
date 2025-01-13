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
        if (ref.current && ref.current.value.trim() !== "")
          setSearchText(ref.current.value);
      }}
    >
      <Input
        ref={ref}
        placeholder="Search games..."
        className="w-full rounded-full bg-primary-foreground"
      />
      <Search aria-hidden="true" className="absolute top-1 right-2" />
    </form>
  );
};

export default SearchInput;
