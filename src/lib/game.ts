import { Board } from '../components/GameBoard/GameBoard';

const DEFAULT_CELL_VALUE = false;

export const initBoard = (
  rowsCount: number,
  colsCount: number = rowsCount,
  initValue: boolean = DEFAULT_CELL_VALUE,
) => new Array(rowsCount).fill(new Array(colsCount).fill(initValue));

export const changeCell = (board: Board, row: number, col: number, value: boolean) => {
  return board.map((cellsRow, rowIndex) =>
    rowIndex !== row
      ? cellsRow
      : cellsRow.map((cell, colIndex) => (colIndex !== col ? cell : value)),
  );
};

export const getAliveNeighboursCount = (board: Board, row: number, col: number) => {
  const rowsCount = board.length;
  const colsCount = board[0].length;

  let count = Number(-board[row][col]);
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      count += Number(board[(i + rowsCount) % rowsCount][(j + colsCount) % colsCount]);
    }
  }
  return count;
};

export const changeArraySize = (
  arr: any[],
  newSize: number,
  newElementsValue: any = DEFAULT_CELL_VALUE,
) => {
  if (arr.length === newSize) {
    return arr;
  }
  return arr.length > newSize
    ? arr.slice(0, newSize)
    : [...arr, ...new Array(newSize - arr.length).fill(newElementsValue)];
};

export const changeBoardSize = (board: Board, newSize: number) =>
  changeArraySize(board, newSize, new Array(newSize).fill(DEFAULT_CELL_VALUE)).map((row) =>
    changeArraySize(row, newSize),
  );

export const step = (board: Board) => {
  return board.map((row, rowIndex) =>
    row.map((cell, colIndex) => {
      const aliveNeighboursCount = getAliveNeighboursCount(board, rowIndex, colIndex);
      return aliveNeighboursCount === 3 || (cell && aliveNeighboursCount === 2);
    }),
  );
};
