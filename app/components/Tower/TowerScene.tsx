import { Tower } from "./Tower";
import { TowerMoon } from "./TowerMoon";

const TowerScene = () => {
  return (
    <div className="bg-sky-900">
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
