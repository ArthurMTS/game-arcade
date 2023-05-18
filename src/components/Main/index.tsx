import React from "react";

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export function Main({ children, className }: MainProps) {
  return (
    <main
      className={`ml-20 min-h-screen flex flex-col items-center bg-slate-200 dark:bg-slate-900 ${className}`}
    >
      {children}
    </main>
  );
}
