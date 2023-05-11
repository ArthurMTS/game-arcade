import React from "react";

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export function Main({ children, className }: MainProps) {
  return (
    <main className={`bg-slate-900 ml-20 min-h-screen flex flex-col items-center ${className}`}>
      {children}
    </main>
  );
}
