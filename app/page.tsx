("");
import { Suspense } from "react";
import Genres from "./_components/Genres";
import Spinner from "./_components/Spinner";
import Games from "./_components/Games";
import PlatformsList from "./_components/PlatformsList";
import { Skeleton } from "@/components/ui/skeleton";
import SortingList from "./_components/SortingList";
import Heading from "./_components/Heading";

export default function Home() {
  return (
    <div className="flex pb-3 h-screen">
      <div className="hidden md:block w-52 px-2 ">
        <Suspense fallback={<Spinner />}>
          <Genres />
        </Suspense>
      </div>
      <div className=" flex-1">
        <div className="flex gap-2 ml-2">
          <Suspense fallback={<Skeleton className="w-[200px] h-[35px] ml-2" />}>
            <PlatformsList />
          </Suspense>
          <SortingList />
        </div>
        <Heading />
        <Games />
      </div>
    </div>
  );
}
