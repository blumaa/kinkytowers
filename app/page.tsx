import { PoemCard } from "./components/PoemCard/PoemCard";
import { Tower } from "./components/Tower/Tower";
import { TowerMoon } from "./components/Tower/TowerMoon";
import { moonPoem } from "./components/moon-poem";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <header>
        <div className="flex justify-between">
          <div className="pl-4 pt-2">kinky towers</div>
          <div className="w-1/12 md:w-1/12">
            <TowerMoon />
          </div>
        </div>
      </header>
      <div className="md:grid md:grid-cols-12 ">
        <div className="md:col-span-8 justify-self-center">
          <PoemCard title="Moon Poem #156">{moonPoem}</PoemCard>
        </div>
        <div className="md:col-span-4 "></div>
      </div>
      <footer className="flex justify-end">
      <div className="text-xs text-slate-600 p-4">© 2023 <a href="mailto:desmond.blume@gmail.com" className="hover:text-sky-600 hover:underline">Desmond Blume</a></div>
      </footer>
      <Tower />
    </main>
  );
}
