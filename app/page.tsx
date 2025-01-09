''
import { Suspense } from "react";
import Games from "./_components/Games";
import GamesLoading from "./_components/GamesLoading";
import Genres from "./_components/Genres";
import Spinner from "./_components/Spinner";

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
        <Suspense fallback={<GamesLoading />}>
          <Games />
        </Suspense>
      </div>
    </div>
  );
}
