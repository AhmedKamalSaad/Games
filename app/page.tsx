import { Suspense } from "react";
import Games from "./_components/Games";

export default function Home() {
  return (
    <div className="flex">
      <div className="hidden md:block w-52">Aside</div>
      <div className="px-2 flex-1">
        <Suspense fallback={<p>loading....</p>}>
          <Games />
        </Suspense>
      </div>
    </div>
  );
}
