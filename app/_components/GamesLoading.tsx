import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const GamesLoading = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2 px-2">
      {skeletons.map((s) => (
        <div
          key={s}
          className="border flex flex-col items-center rounded-lg overflow-hidden h-[300px]"
        >
          <Skeleton className=" w-full h-full" />
          <div className="w-full h-full p-4 flex flex-col gap-2">
            <Skeleton className="h-5 w-[200px]" />
            <div className="flex justify-between">
              <Skeleton className="h-4 w-[80px]" />
              <Skeleton className="rounded-md h-6 w-8 px-2.5 py-0.5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesLoading;
