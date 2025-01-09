import { Suspense } from "react";
import Games from "./_components/Games";
import GamesLoading from "./_components/GamesLoading";

export default function Home() {
  return (
    <div className="flex">
      <div className="hidden md:block w-52">Aside</div>
      <div className="px-2 flex-1">
        <Suspense fallback={<GamesLoading/>}>
          <Games />
        </Suspense>
      </div>
    </div>
  );
}
