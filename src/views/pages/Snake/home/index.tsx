import { Link } from "react-router-dom";

import { Header, Main } from "@/components";
import { PageRoutes } from "@/views";
import ArrowUp from "@/assets/icons/arrow-up.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import ArrowLeft from "@/assets/icons/arrow-left.svg";

export function SnakeHome() {
  return (
    <>
      <Header />
      <Main className="justify-center">
        <h2 className="font-mono text-4xl text-slate-50">Snake Game</h2>
        <p className="text-slate-100 text-xl text-justify w-96 my-4">
          The game consists of controlling the snake (the green dot) to capture
          the fruit (the red dot) on the screen, but you have to be careful not
          to hit the walls or eat your own tail, because otherwise the game is
          over.
        </p>

        <div className="bg-slate-700 rounded-lg p-2 mb-4 w-40">
          <span className="text-slate-400 font-mono">Controls</span>
          <p className="flex gap-2 text-lg text-slate-100">
            <img src={ArrowUp} alt="arrow up" />
            Move Up
          </p>
          <p className="flex gap-2 text-lg text-slate-100">
            <img src={ArrowRight} alt="arrow right" />
            Move Right
          </p>
          <p className="flex gap-2 text-lg text-slate-100">
            <img src={ArrowDown} alt="arrow down" />
            Move Down
          </p>
          <p className="flex gap-2 text-lg text-slate-100">
            <img src={ArrowLeft} alt="arrow left" />
            Move Left
          </p>
          <span className="text-sm text-yellow-500">Tip: you cannot abruptly turn in the opposite direction to the one you are going</span>
        </div>

        <Link
          to={PageRoutes.snakeGame}
          className="bg-indigo-600 px-4 py-1 pb-2 text-slate-100 rounded-lg text-2xl transition-all hover:bg-indigo-700"
        >
          Start
        </Link>
      </Main>
    </>
  );
}
