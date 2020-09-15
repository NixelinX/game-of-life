import React, { FC } from 'react';
import s from './GameBoard.module.scss';
import { Cell } from '../Cell/Cell';

export type Board = boolean[][];

type GameBoardProps = {
  board: Board;
  onCellClick: (row: number, column: number) => void;
};

export const GameBoard: FC<GameBoardProps> = ({ board, onCellClick }) => {
  return (
    <div className={s.GameBoard}>
      <div
        className={s.GameBoard__grid}
        style={{
          gridTemplateColumns: `repeat(${board.length}, 20px)`,
        }}
      >
        {board.map((rowCells, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {rowCells.map((cellState, colIndex) => (
              <Cell
                key={`${rowIndex}${colIndex}`}
                onClick={() => onCellClick(rowIndex, colIndex)}
                isAlive={cellState}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
