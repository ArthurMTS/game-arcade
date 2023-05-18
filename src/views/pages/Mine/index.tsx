import React from "react";

import {
  Header,
  Home,
  InfoBox,
  InfoItem,
  Main,
  SurrenderFlag,
} from "@/components";

interface iCell {
  clicked: boolean;
  value: number;
  row: number;
  col: number;
}

interface CellProps {
  row: number;
  col: number;
  cell: iCell;
  onClick: (x: number, y: number) => void;
}

const getBoardStats = (difficulty: string) => {
  let rows = 0;
  let cols = 0;
  let bombs = 0;
  switch (difficulty) {
    case "Easy":
      rows = 9;
      cols = 9;
      bombs = 10;
      break;
    case "Normal":
      rows = 16;
      cols = 16;
      bombs = 40;
      break;
    case "Hard":
      rows = 16;
      cols = 30;
      bombs = 99;
      break;
    case "Hell":
      rows = 16;
      cols = 30;
      bombs = 145;
      break;
    default:
      rows = 16;
      cols = 16;
      bombs = 40;
      break;
  }
  return { rows, cols, bombs };
};

const getAdjacentCells = (
  grid: iCell[][],
  rowIndex: number,
  colIndex: number,
  rows: number,
  cols: number,
) => {
  const topLeftCell =
    rowIndex > 0 && colIndex > 0 ? grid[rowIndex - 1][colIndex - 1] : null;
  const topCell = rowIndex > 0 ? grid[rowIndex - 1][colIndex] : null;
  const topRightCell =
    rowIndex > 0 && colIndex < cols - 1
      ? grid[rowIndex - 1][colIndex + 1]
      : null;
  const leftCell = colIndex > 0 ? grid[rowIndex][colIndex - 1] : null;
  const rightCell = colIndex < cols - 1 ? grid[rowIndex][colIndex + 1] : null;
  const bottomLeftCell =
    rowIndex < rows - 1 && colIndex > 0
      ? grid[rowIndex + 1][colIndex - 1]
      : null;
  const bottomCell = rowIndex < rows - 1 ? grid[rowIndex + 1][colIndex] : null;
  const bottomRightCell =
    rowIndex < rows - 1 && colIndex < cols - 1
      ? grid[rowIndex + 1][colIndex + 1]
      : null;

  return [
    topLeftCell,
    topCell,
    topRightCell,
    leftCell,
    rightCell,
    bottomLeftCell,
    bottomCell,
    bottomRightCell,
  ];
};

function Cell({ row, col, cell, onClick }: CellProps) {
  const onCellClick = () => {
    if (cell.clicked) return;
    onClick(row, col);
  };

  return (
    <div
      className={`w-6 h-6 bg-slate-950 border border-slate-300 cursor-pointer flex items-center justify-center text-slate-950 ${
        cell.clicked ? "bg-white" : ""
      }`}
      onClick={onCellClick}
    >
      {cell.value === -1 ? "💣" : ""}
      {cell.clicked && cell.value !== -1 && cell.value !== 0 ? cell.value : ""}
    </div>
  );
}

export function Mine() {
  const [gameStart, setGameStart] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState("Normal");
  const [grid, setGrid] = React.useState<iCell[][]>([]);
  const [max, setMax] = React.useState(0);

  React.useEffect(() => {
    if (!gameStart) return;
    startGame();
  }, [gameStart]);

  const startGame = () => {
    const { rows, cols, bombs } = getBoardStats(difficulty);
    setMax((rows * cols) - bombs);
    generateCells(rows, cols, bombs);
  };

  const generateCells = (rows: number, cols: number, bombs: number) => {
    // Generating empty board
    let newGrid: iCell[][] = [];
    for (let i = 0; i < rows; i++) {
      let row: iCell[] = [];
      for (let j = 0; j < cols; j++) {
        row.push({ clicked: false, value: 0, row: i, col: j });
      }
      newGrid.push(row);
    }
    // Adding bombs in random places
    let bombsPlaced = 0;
    while (bombsPlaced < bombs) {
      let randomRow = Math.floor(Math.random() * rows);
      let randomCol = Math.floor(Math.random() * cols);

      if (newGrid[randomRow][randomCol].value !== -1) {
        newGrid[randomRow][randomCol].value = -1;
        bombsPlaced += 1;
      }
    }
    // Adding the numbers of the newGrid
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      for (let colIndex = 0; colIndex < cols; colIndex++) {
        if (newGrid[rowIndex][colIndex].value === -1) continue;

        const adjnewGrid = getAdjacentCells(newGrid, rowIndex, colIndex, rows, cols);

        let numberOfBombs = adjnewGrid.reduce((bombs, cell) => {
          if (cell?.value === -1) return bombs + 1;
          return bombs + 0;
        }, 0);

        newGrid[rowIndex][colIndex].value = numberOfBombs;
      }
    }
    setGrid(newGrid);
  };

  const onCellClick = (rowIndex: number, colIndex: number) => {
    let newGrid = [...grid];
    const currentCell = newGrid[rowIndex][colIndex];
    newGrid[rowIndex][colIndex].clicked = true;

    if (currentCell.value === -1) setTimeout(() => endGame(), 200);
    else if (currentCell.value === 0)
      newGrid = openMultipleCells(newGrid, rowIndex, colIndex);
    
    setGrid(newGrid);

    // winning condition
    let openCells = 0;
    for (let row = 0; row < newGrid.length; row++) {
      for (let col = 0; col < newGrid[0].length; col++) {
        if (newGrid[row][col].clicked) openCells++;
      }
    }
    if (openCells >= max) {
      alert("Congratulations, you won! 🎉");
      setGameStart(false);
    }
    console.log(openCells, max);
  };

  const openMultipleCells = (
    grid: iCell[][],
    rowIndex: number,
    colIndex: number,
  ): iCell[][] => {
    let newGrid = [...grid];
    const { rows, cols } = getBoardStats(difficulty);

    const adjCells = getAdjacentCells(newGrid, rowIndex, colIndex, rows, cols);
    adjCells.forEach(cell => {
      if (!cell || cell?.clicked || cell.value === -1) return;
      newGrid[cell.row][cell.col].clicked = true;
      if (cell.value === 0) newGrid = openMultipleCells(newGrid, cell.row, cell.col);
    });

    return newGrid;
  };

  const endGame = () => {
    alert("Game Over 💣");
    setGameStart(false);
  };

  return (
    <>
      <Header />
      {gameStart ? (
        <Main className="justify-center">
          <h2 className="text-2xl text-slate-50 mb-4">Minesweeper</h2>

          <SurrenderFlag onGameEnd={() => setGameStart(false)} />

          <div
            id="board-mine"
            className="shadow-lg shadow-slate-950 flex flex-wrap"
          >
            {grid.map((line, row) => (
              <div key={row}>
                {line.map((cell, col) => (
                  <Cell
                    key={col}
                    row={row}
                    col={col}
                    cell={cell}
                    onClick={onCellClick}
                  />
                ))}
              </div>
            ))}
          </div>
        </Main>
      ) : (
        <Home
          title="Minesweeper"
          description="Minesweeper is very simple, you just click on one of the squares on the grid and hope your choice was not explosive, the game ends if you click on a mine, choose from the difficulty options and see how many squares you can click without clicking on any mine!"
        >
          <InfoBox title="Difficulty">
            <InfoItem
              className={`cursor-pointer p-1 hover:bg-slate-900 ${
                difficulty === "Easy" ? "bg-slate-950" : ""
              }`}
              text="Easy"
              onClick={() => setDifficulty("Easy")}
            />
            <InfoItem
              className={`cursor-pointer p-1 hover:bg-slate-900 ${
                difficulty === "Normal" ? "bg-slate-950" : ""
              }`}
              text="Normal"
              onClick={() => setDifficulty("Normal")}
            />
            <InfoItem
              className={`cursor-pointer p-1 hover:bg-slate-900 ${
                difficulty === "Hard" ? "bg-slate-950" : ""
              }`}
              text="Hard"
              onClick={() => setDifficulty("Hard")}
            />
            <InfoItem
              className={`cursor-pointer p-1 hover:bg-slate-900 ${
                difficulty === "Hell" ? "bg-slate-950" : ""
              }`}
              text="Hell"
              onClick={() => setDifficulty("Hell")}
            />
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
