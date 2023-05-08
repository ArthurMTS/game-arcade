"use client";
import React from "react";

import { NavLink } from "@/components/NavLink";
import Image from "next/image";

export function Header() {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <header className="flex flex-col justify-between bg-gray-950 h-screen w-20">
      <NavLink
        className="bg-slate-800"
        href="/"
        iconpath="/save.svg"
        size={40}
      />
      <nav>
        <NavLink
          title="Coffee"
          href="#"
          iconpath="/coffee.svg"
          size={35}
          hover
        />
        <NavLink
          title="Coffee"
          href="#"
          iconpath="/coffee.svg"
          size={35}
          hover
        />
        <NavLink
          title="Coffee"
          href="#"
          iconpath="/coffee.svg"
          size={35}
          hover
        />
      </nav>
      <div className="flex flex-col items-center content-center my-4">
        <NavLink
          href="https://github.com/ArthurMTS"
          iconpath="/github.svg"
          size={20}
          external
        />
        <Image
          className="cursor-pointer bg-slate-900 p-1 transition-colors rounded-lg hover:bg-slate-800"
          src={theme === "dark" ? "/sun.svg" : "/moon.svg"}
          alt="theme toggle"
          width={25}
          height={25}
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
}
