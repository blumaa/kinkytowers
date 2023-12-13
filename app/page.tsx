import { PoemCard } from "./components/PoemCard/PoemCard";
import { Tower } from "./components/Tower/Tower";
import { TowerMoon } from "./components/Tower/TowerMoon";
import { moonPoem } from "./components/moon-poem";

export default function Home() {
  return (
    <main>
      <header>
        <div className="flex justify-between">
          <div className="pl-4 pt-2">kinky towers</div>
          <div className="w-1/12 md:w-1/12">
            <TowerMoon />
          </div>
        </div>
      </header>
      <div className="relative">
        <div className="border-yellow-500 rounded-lg flex flex-col items-center justify-center ">
          <PoemCard>{moonPoem}</PoemCard>
        </div>
        <div className="absolute bottom-0">
          <div className="w-3/4">
            <Tower />
          </div>
        </div>
      </div>
    </main>
  );
}
