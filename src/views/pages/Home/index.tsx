import { Header, GameCard, Main } from "@/components";
import { PageRoutes } from "@/views";
import SnakeBanner from "@/assets/images/snake-banner.png";
import MineBanner from "@/assets/images/mine-banner.png";

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <h1 className="mt-4 text-2xl font-mono text-slate-950 dark:text-slate-50">
          Choose a game and have fun!
        </h1>
        <div className="m-4 flex items-center justify-center flex-wrap gap-4">
          <GameCard
            title="Snake"
            description="The game it's about moving the snake in the direction of the fruits,
            and then catching them to grow bigger, but take care not to eat your own
            tail!"
            path={PageRoutes.snake}
            image={SnakeBanner}
          />
          <GameCard
            title="Minesweeper"
            description="Let's see how good you are at dodging mines, pick a grid that you are confident with, click on it, and hope it wasn't an explosive decision!"
            path={PageRoutes.mine}
            image={MineBanner}
          />
          <GameCard
            title="Dummy"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium elementum ornare. Aenean consectetur, urna vitae consequat dapibus."
            path={PageRoutes.dummy}
            image={MineBanner}
          />
        </div>
      </Main>
    </>
  );
}
