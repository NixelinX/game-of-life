import { changeBoardSize, getAliveNeighboursCount, initBoard } from './game';

test('getAliveNeighboursCount', () => {
  const board = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ];
  expect(getAliveNeighboursCount(board, 1, 1)).toBe(8);
  expect(getAliveNeighboursCount(board, 0, 1)).toBe(8);

  const board2 = [
    [false, false, true],
    [false, false, false],
    [true, true, true],
  ];
  expect(getAliveNeighboursCount(board2, 0, 0)).toBe(4);
});

test('increaseBoardSize', () => {
  const board = initBoard(4, 4, true);
  const newBoard = changeBoardSize(board, 3);
  console.log(board, newBoard);
  expect(newBoard.length).toBe(3);
  expect(newBoard[0].length).toBe(3);
  expect(newBoard[2][2]).toBe(true);
});

test('decreaseBoardSize', () => {
  const board = initBoard(3, 3, true);
  const newBoard = changeBoardSize(board, 5);
  expect(newBoard.length).toBe(5);
  expect(newBoard[0].length).toBe(5);
  expect(newBoard[4][4]).toBe(false);
});
