import SnakeBanner from "@/assets/images/snake.png";
import PlayIcon from "@/assets/icons/play.svg";

export function GameCard() {
  return (
    <div className="w-64 relative bg-slate-800 rounded-xl shadow-lg shadow-slate-950">
      <img className="rounded-t-xl" src={SnakeBanner} alt={""} />
      <p className="font-mono px-4 py-2 text-xl text-slate-100">Snake</p>
      <p className="text-base px-4 pb-2 text-justify text-slate-300">
        The game it's about moving the snake in the direction of the fruits,
        and then catching them to grow bigger, but take care not to eat your own
        tail!
      </p>
      <img
        className="bg-indigo-600 rounded-full p-2 pr-1 w-12 h-12 absolute right-4 top-20 shadow-lg shadow-slate-950 cursor-pointer transition-all hover:scale-105"
        src={PlayIcon}
        alt={"play button"}
        width={30}
        height={30}
      />
    </div>
  );
}
