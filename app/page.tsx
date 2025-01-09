import { Suspense } from "react";
import Games from "./_components/Games";

export default function Home() {
  return (
    <div className="flex">
      <div className="hidden sm:block w-52">Aside</div>
      <div className="bg-blue-300 flex-1">
        <Suspense fallback={<p>loading....</p>}>
          <Games />
        </Suspense>
      </div>
    </div>
  );
}
