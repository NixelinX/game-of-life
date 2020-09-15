import React, { FC } from 'react';
import s from './LifeGame.module.scss';
import { ButtonsPanel } from '../ButtonsPanel/ButtonsPanel';
import { ButtonProps } from '../Button/Button';
import { Presets } from '../Presets/Presets';
import { Preset } from '../../presets';
import { Board, GameBoard } from '../GameBoard/GameBoard';

type LifeGameProps = {
  boardSizeButtons: ButtonProps[];
  controlButtons: ButtonProps[];
  setPreset: (preset: Preset) => void;
  board: Board;
  onCellClick: (row: number, column: number) => void;
};

export const LifeGame: FC<LifeGameProps> = ({
  boardSizeButtons,
  controlButtons,
  setPreset,
  board,
  onCellClick,
}) => {
  return (
    <section className={s.LifeGame}>
      <h1 className={s.LifeGame__Header}>Game of Life</h1>
      <ButtonsPanel title="Size of board" buttons={boardSizeButtons} />
      <ButtonsPanel title="Controls of life" buttons={controlButtons} />
      <Presets setPreset={setPreset} />
      <GameBoard board={board} onCellClick={onCellClick} />
    </section>
  );
};
