import React from "react";

import { NavLink } from "@/components";
import { PageRoutes } from "@/views";
import SaveIcon from "@/assets/icons/save.svg";
import CoffeeIcon from "@/assets/icons/coffee.svg";
import GithubIcon from "@/assets/icons/github.svg";
import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import SnakeIcon from "@/assets/images/snake-icon.png";
import MineIcon from "@/assets/images/mine-icon.png";

export function Header() {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <header className="float-left fixed flex flex-col justify-between bg-gray-950 h-screen w-20">
      <NavLink
        className="bg-slate-800"
        href={PageRoutes.home}
        iconpath={SaveIcon}
        size={40}
      />
      <nav>
        <NavLink
          title="Snake"
          href={PageRoutes.snake}
          iconpath={SnakeIcon}
          size={35}
          hover
        />
        <NavLink
          title="Mine"
          href={PageRoutes.mine}
          iconpath={MineIcon}
          size={35}
          hover
        />
        <NavLink
          title="Coffee"
          href="#"
          iconpath={CoffeeIcon}
          size={35}
          hover
        />
      </nav>
      <div className="flex flex-col items-center content-center my-4">
        <NavLink
          href="https://github.com/ArthurMTS"
          iconpath={GithubIcon}
          size={20}
          external
        />
        <img
          className="cursor-pointer bg-slate-900 p-1 transition-colors rounded-lg hover:bg-slate-800"
          src={theme === "dark" ? SunIcon : MoonIcon}
          alt="theme toggle"
          width={25}
          height={25}
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
}
