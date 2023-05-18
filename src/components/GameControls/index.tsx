import React from "react";

interface InfoBoxProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  obs?: string;
}

interface InfoItemProps {
  className?: string;
  icon?: string;
  text: string;
  onClick?: (value: any) => void;
}

export function InfoItem({ className, text, icon, onClick }: InfoItemProps) {
  return (
    <p
      className={`flex gap-2 text-lg text-slate-100 ${className}`}
      onClick={onClick}
    >
      {icon ? <img src={icon} alt={icon} /> : ""}
      {text}
    </p>
  );
}

export function InfoBox({ title, children, obs, className }: InfoBoxProps) {
  return (
    <div className={`bg-slate-700 rounded-lg p-2 mb-4 w-40 ${className}`}>
      <span className="text-slate-400 font-mono">{title}</span>

      {children}

      {obs ? <span className="text-sm text-yellow-500">{obs}</span> : ""}
    </div>
  );
}
