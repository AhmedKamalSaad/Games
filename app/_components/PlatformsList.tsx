import getData from "@/lib/getData";
import { Platform } from "@/lib/types";
import { List } from "./List";

const PlatformsList = async () => {
  const { data: platforms, error } = await getData<Platform>(
    "platforms/lists/parents"
  );
  if (error) return <p>No Platforms</p>;

  return (
      <List platforms={platforms || []} />
  );
};

export default PlatformsList;
