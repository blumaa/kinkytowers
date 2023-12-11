import { PoemCard } from "./components/PoemCard/PoemCard";
import { Tower } from "./components/Tower/Tower";
import { TowerMoon } from "./components/Tower/TowerMoon";

const moonPoem =
  "Look at her up in the sky, sitting there, naturally, in her moon chamber, orbiting, typing away at her cosmic typewriter. Watch as her fingers dance across the keys as if she were a pianist playing a moonlit sonata. As she pauses to think, she draws in a breath, pulling from a pipe branching from her lips, the bowl packed to the brim with kismet, with hot coals of stardust glowing red like young stars. She lets smoke escape her lips, a shroud of clouds dances around her like the rings of Saturn. Thwack thwack go the keys. Ding goes the bell as the carriage runs out at the end of each tide. She logs all the events of history, as usual, all the stories of time. She has both witnessed all of it and been a part of it all. She writes in her cosmic journal: tales of evolution, excitement, genocide, sorrow; she has seen the most terrible things and the most beautiful things. Is there any difference? she asks herself as she pulls back the carriage and lets the tide flow out. Her mind empties and begins to fill up again- pooling and swirling in the great cosmic bird bath- her fingers type the tide in, smooching the sand just a little more every minute. The blood red clouds begin to drip, the mountains echo with howls. A lonely fool, bumbles along innocently, stumbles across the stones at the base of a tower. A very high priestess performs magical rituals at the top of the very same tower.";

export default function Home() {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <header>
        <div className="flex justify-between">
          <div className="pl-4 pt-2">kinky towers</div>
          <div className="w-1/12">
            <TowerMoon />
          </div>
        </div>
      </header>
      <div className="flex flex-row ">
        <div className="flex justify-center pt-10 ">
        <div className="w-3/4 overflow-scroll h-3/5 md:h-full md:w-1/2">
            <PoemCard>{moonPoem}</PoemCard>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 ">
        <div className="w-64 md:w-96 ">
          <Tower />
        </div>
      </div>
    </main>
  );
}
