"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useStore } from "@/lib/store";
interface Sort {
  value: string;
  label: string;
}
export function Sorting({ array }: { array: Sort[] }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { setOrder } = useStore();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[220px] justify-between"
        >
          {value
            ? `Ordered by : ${array.find((a) => a.label === value)?.label}`
            : "Select Order"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="select order" />
          <CommandList>
            <CommandEmpty>No Order found.</CommandEmpty>
            <CommandGroup>
              {array.map((a, i) => (
                <CommandItem
                  key={i}
                  value={a.label}
                  onSelect={(currentValue: string) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOrder(a.value)
                    setOpen(false);
                  }}
                >
                  {a.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === a.label ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
