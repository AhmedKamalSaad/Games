import Genres from "./_components/Genres";
import Games from "./_components/Games";
import PlatformsList from "./_components/PlatformsList";
import SortingList from "./_components/SortingList";
import Heading from "./_components/Heading";

export default function Home() {
  return (
    <div className="flex pb-3 h-screen" >
      <div className="hidden md:block w-52 px-2  ">
          <Genres />
      </div>
      <div className=" w-full">
        <div className="flex gap-2 px-2">
          <PlatformsList />
          <SortingList />
        </div>
        <Heading />
        <Games />
      </div>
    </div>
  );
}
