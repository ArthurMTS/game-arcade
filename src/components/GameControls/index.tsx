import React from "react";

interface GameControlsBoxProps {
  children: React.ReactNode;
  tip?: string;
}

interface GameControlProps {
  icon: string;
  text: string;
}

export function GameControl({ text, icon }: GameControlProps) {
  return (
    <p className="flex gap-2 text-lg text-slate-100">
      <img src={icon} alt="arrow up" />
      {text}
    </p>
  );
}

export function GameControlsBox({ children, tip }: GameControlsBoxProps) {
  return (
    <div className="bg-slate-700 rounded-lg p-2 mb-4 w-40">
      <span className="text-slate-400 font-mono">Controls</span>

      {children}

      {tip ? <span className="text-sm text-yellow-500">Tip: {tip}</span> : ""}
    </div>
  );
}
