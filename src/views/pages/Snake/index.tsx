import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  InfoItem,
  InfoBox,
  Header,
  Home,
  Main,
  SurrenderFlag,
} from "@/components";
import ArrowUp from "@/assets/icons/arrow-up.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import ArrowLeft from "@/assets/icons/arrow-left.svg";

export function Snake() {
  const [gameStart, setGameStart] = React.useState(false);
  const blockSize = 25;
  const rows = 20;
  const cols = 20;
  let context: CanvasRenderingContext2D;
  let board: HTMLCanvasElement;

  // snake head
  let snakeX = blockSize * 5;
  let snakeY = blockSize * 5;

  let velocityX = 0;
  let velocityY = 0;

  const snakeBody: number[][] = [];

  // fruit
  let fruitX: number;
  let fruitY: number;

  React.useEffect(() => {
    if (!gameStart) return;
    board = document.getElementById("board-snake") as HTMLCanvasElement;
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board?.getContext("2d") as unknown as CanvasRenderingContext2D;

    placeFruit();
    document.addEventListener("keyup", event => changeDirection(event));
    const i = setInterval(update, 100);

    return () => {
      clearInterval(i);
      document.removeEventListener("keyup", event => changeDirection(event));
    };
  }, [gameStart]);

  const update = () => {
    // board
    context.fillStyle = "rgb(2 6 23)";
    context.fillRect(0, 0, board.width, board.height);

    // fruit
    context.fillStyle = "rgb(220 38 38)";
    context.fillRect(fruitX, fruitY, blockSize, blockSize);

    // eat fruit
    if (snakeX === fruitX && snakeY === fruitY) {
      snakeBody.push([fruitX, fruitY]);
      placeFruit();
    }

    // move snake body
    for (let i = snakeBody.length - 1; i > 0; i--) {
      snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
      snakeBody[0] = [snakeX, snakeY];
    }

    // snake
    context.fillStyle = "rgb(16 185 129)";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
      context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    // game over conditions
    if (
      snakeX < 0 ||
      snakeX > cols * blockSize ||
      snakeY < 0 ||
      snakeY > rows * blockSize
    ) {
      endGame();
    }

    for (let i = 0; snakeBody.length; i++) {
      if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
        endGame();
      }
    }
  };

  const changeDirection = (event: KeyboardEvent) => {
    if (event.code === "ArrowUp" && velocityY !== 1) {
      velocityX = 0;
      velocityY = -1;
    } else if (event.code === "ArrowRight" && velocityX !== -1) {
      velocityX = 1;
      velocityY = 0;
    } else if (event.code === "ArrowDown" && velocityY !== -1) {
      velocityX = 0;
      velocityY = 1;
    } else if (event.code === "ArrowLeft" && velocityX !== 1) {
      velocityX = -1;
      velocityY = 0;
    }
  };

  const placeFruit = () => {
    fruitX = Math.floor(Math.random() * cols) * blockSize;
    fruitY = Math.floor(Math.random() * rows) * blockSize;
  };

  const endGame = () => {
    toast("Game Over 🐍");
    setGameStart(false);
  };

  return (
    <>
      <Header />
      <ToastContainer />
      {gameStart ? (
        <Main className="justify-center relative">
          <h2 className="text-2xl mb-4 text-slate-950 dark:text-slate-50">Snake</h2>

          <SurrenderFlag onGameEnd={() => setGameStart(false)} />

          <canvas
            className="shadow-lg shadow-slate-950"
            id="board-snake"
          ></canvas>
        </Main>
      ) : (
        <Home
          title="Snake Game"
          description="The game consists of controlling the snake (the green dot) to capture
        the fruit (the red dot) on the screen, but you have to be careful not to
        hit the walls or eat your own tail, because otherwise the game is over."
        >
          <InfoBox title="Controls" obs="Tip: you cannot abruptly turn in the opposite direction to the one you are going">
            <InfoItem text="Move Up" icon={ArrowUp} />
            <InfoItem text="Move Right" icon={ArrowRight} />
            <InfoItem text="Move Down" icon={ArrowDown} />
            <InfoItem text="Move Left" icon={ArrowLeft} />
          </InfoBox>
          <button
            className="bg-indigo-600 px-4 py-1 pb-2 text-slate-100 rounded-lg text-2xl transition-all hover:bg-indigo-700"
            onClick={() => setGameStart(true)}
          >
            Start
          </button>
        </Home>
      )}
    </>
  );
}
