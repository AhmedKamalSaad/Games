''
import { Suspense } from "react";
import Genres from "./_components/Genres";
import Spinner from "./_components/Spinner";
import Games from "./_components/Games";

export default function Home() {
  return (
    <div className="flex pb-3 h-screen">
      <div className="hidden md:block w-52 px-2 ">
        <Suspense
          fallback={
          <Spinner/>
          }
        >
          <Genres />
        </Suspense>
      </div>
      <div className=" flex-1">
          <Games />
      </div>
    </div>
  );
}
