import { Header, GameHome } from "@/components";
import { PageRoutes } from "@/views";

export function SnakeHome() {
  return (
    <>
      <Header />
      <GameHome
        title="Snake Game"
        description="The game consists of controlling the snake (the green dot) to capture
        the fruit (the red dot) on the screen, but you have to be careful not to
        hit the walls or eat your own tail, because otherwise the game is over."
        gamePath={PageRoutes.snakeGame}
      />
    </>
  );
}
