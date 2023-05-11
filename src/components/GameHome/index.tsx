import { Link } from "react-router-dom";

import { GameControl, GameControlsBox, Main } from "@/components";
import ArrowUp from "@/assets/icons/arrow-up.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import ArrowLeft from "@/assets/icons/arrow-left.svg";

interface GameHomeProps {
  title: string;
  description: string;
  gamePath: string;
}

export function GameHome({ title, description, gamePath }: GameHomeProps) {
  return (
    <Main className="justify-center">
      <h2 className="font-mono text-4xl text-slate-50">{title}</h2>
      <p className="text-slate-100 text-xl text-justify w-96 my-4">
        {description}
      </p>

      <GameControlsBox tip="you cannot abruptly turn in the opposite direction to the one you are going">
        <GameControl text="Move Up" icon={ArrowUp} />
        <GameControl text="Move Right" icon={ArrowRight} />
        <GameControl text="Move Down" icon={ArrowDown} />
        <GameControl text="Move Left" icon={ArrowLeft} />
      </GameControlsBox>

      <Link
        to={gamePath}
        className="bg-indigo-600 px-4 py-1 pb-2 text-slate-100 rounded-lg text-2xl transition-all hover:bg-indigo-700"
      >
        Start
      </Link>
    </Main>
  );
}
