import { Board } from './components/GameBoard/GameBoard';

export type Preset = {
  title: string;
  minSize: number;
  pattern: Board;
};

export const presets: Preset[] = [
  {
    title: 'Glider',
    minSize: 3,
    pattern: [
      [true, false, true],
      [false, true, true],
      [false, true, false],
    ],
  },
  {
    title: 'Spaceship',
    minSize: 5,
    pattern: [
      [false, true, true, false, false],
      [true, true, true, true, false],
      [true, true, false, true, true],
      [false, false, true, true, false],
    ],
  },
  {
    title: 'Quadpole',
    minSize: 7,
    pattern: [
      [true, true, false, false, false, false, false],
      [true, false, false, false, false, false, false],
      [false, true, false, true, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, true, false, true, false],
      [false, false, false, false, false, false, true],
      [false, false, false, false, false, true, true],
    ],
  },
];
