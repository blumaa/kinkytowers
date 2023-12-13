import { Tower } from "./Tower";
import { TowerMoon } from "./TowerMoon";

const TowerScene = () => {
  return (
    <div className="bg-[#1f2933]">
      <div className="flex items-end justify-end ">
        <div className="w-1/6">
          <TowerMoon />
        </div>
      </div>
      <div>
        <Tower />
      </div>
    </div>
  );
};

export default TowerScene;
