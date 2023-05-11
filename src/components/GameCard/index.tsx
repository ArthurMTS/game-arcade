import { Link } from "react-router-dom";

import PlayIcon from "@/assets/icons/play.svg";

interface GameCardProps {
  title: string;
  description: string;
  path: string;
  image: string;
}

export function GameCard({ title, description, image, path }: GameCardProps) {
  return (
    <div className="w-64 relative bg-slate-800 rounded-xl shadow-lg shadow-slate-950">
      <img className="rounded-t-xl" src={image} alt="game banner image" />
      <p className="font-mono px-4 py-2 text-xl text-slate-100">{title}</p>
      <p className="text-base px-4 pb-2 text-justify text-slate-300">
        {description}
      </p>
      <Link className="absolute right-4 top-28" to={path}>
        <img
          className="bg-indigo-600 rounded-full p-2 pr-1 w-12 h-12 shadow-lg shadow-slate-950 cursor-pointer transition-all hover:scale-105"
          src={PlayIcon}
          alt={"play button"}
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
