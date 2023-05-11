import React from "react";
import { useNavigate } from "react-router-dom";

import { Header, Main } from "@/components";
import FlagIcon from "@/assets/icons/flag.svg";
import { PageRoutes } from "@/views";

export function Snake() {
  const navigate = useNavigate();
  const blockSize = 25;
  const rows = 20;
  const cols = 20;
  let context: CanvasRenderingContext2D;
  let board: HTMLCanvasElement;
  let gameOver = false;

  // snake head
  let snakeX = blockSize * 5;
  let snakeY = blockSize * 5;

  let velocityX = 0;
  let velocityY = 0;

  var snakeBody: number[][] = []

  // fruit
  let fruitX: number;
  let fruitY: number;

  React.useEffect(() => {
    board = document.getElementById("board-snake") as HTMLCanvasElement;
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board?.getContext("2d") as unknown as CanvasRenderingContext2D;

    placeFruit();
    document.addEventListener("keyup", event => changeDirection(event));
    setInterval(update, 100);
  }, []);

  const update = () => {
    if (gameOver) return;
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
      snakeBody[i] = snakeBody[-1];
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
    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
      gameOver = true;
      alert("Game Over");
    }

    for (let i = 0; snakeBody.length; i++) {
      if (snakeX == snakeBody[i][0] && snakeY === snakeBody[i][1]) {
        gameOver = true;
        alert("Game Over");
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

  const onFlagIconClick = () => {
    if (confirm("Surrender?")) {
      gameOver = true;
      alert("Game Over");
      navigate(PageRoutes.snakeHome);
    }
  };

  return (
    <>
      <Header />
      <Main className="justify-center relative">
        <h2 className="text-2xl text-slate-50 mb-4">Snake</h2>
        <p className="font-mono text-slate-100 text-lg absolute top-1 right-4">Score: {snakeBody?.length}</p>
        <img
          className="absolute top-10 right-4 cursor-pointer"
          src={FlagIcon}
          alt="surrender flag"
          onClick={onFlagIconClick}
        />
        <canvas
          className="shadow-lg shadow-slate-950"
          id="board-snake"
        ></canvas>
      </Main>
    </>
  );
}
