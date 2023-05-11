import { Header, GameCard, Main } from "@/components";
import { PageRoutes } from "@/views";

import SnakeBanner from "@/assets/images/snake-banner.png";

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <h1 className="mt-4 text-2xl font-mono text-slate-50">
          Choose a game and have fun!
        </h1>
        <div className="m-4 flex items-center justify-center flex-wrap gap-4">
          <GameCard
            title="Snake"
            description="The game it's about moving the snake in the direction of the fruits,
            and then catching them to grow bigger, but take care not to eat your own
            tail!"
            path={PageRoutes.snakeHome}
            image={SnakeBanner}
          />
        </div>
      </Main>
    </>
  );
}
