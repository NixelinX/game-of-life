import React, { Component } from 'react';
import { Board } from '../GameBoard/GameBoard';
import { changeBoardSize, changeCell, initBoard, step } from '../../lib/game';
import { Preset } from '../../presets';
import { LifeGame } from '../LifeGame/LifeGame';
import { ButtonProps } from '../Button/Button';
import History from '../../lib/History';
import Timer from '../../lib/Timer';

const DEFAULT_BOARD_SIZE = 12;
const MIN_BOARD_SIZE = 3;
const MAX_BOARD_SIZE = 100;

const HISTORY_CAPACITY = -1;

const LIFE_SPEED = 500;

const validateBoardSize = (size: number) => size >= MIN_BOARD_SIZE && size <= MAX_BOARD_SIZE;

type LifeGameManagerState = {
  boardSize: number;
  board: Board;
  running: boolean;
};

export class LifeGameManager extends Component<{}, LifeGameManagerState> {
  timer: Timer;
  history: History<Board>;

  constructor(props) {
    super(props);
    this.timer = new Timer(this.nextGeneration, LIFE_SPEED);
    this.history = new History<Board>(HISTORY_CAPACITY);

    this.state = {
      boardSize: DEFAULT_BOARD_SIZE,
      board: initBoard(DEFAULT_BOARD_SIZE),
      running: false,
    };
  }

  nextGeneration = () => {
    this.history.push(this.state.board);
    return this.setState(({ board }) => {
      return {
        board: step(board),
      };
    });
  };

  prevGeneration = () => {
    const prevBoard = this.history.pop();
    prevBoard &&
      this.setState({
        board: prevBoard,
      });
  };

  changeBoardSize(delta) {
    this.setState(({ boardSize, board }) => {
      const newSize = boardSize + delta;
      if (validateBoardSize(newSize)) {
        return {
          boardSize: newSize,
          board: changeBoardSize(board, newSize),
        };
      } else {
        return { board, boardSize };
      }
    });
  }

  startLife = () => {
    this.timer.start();
    this.setState({
      running: true,
    });
  };

  pauseLife = () => {
    this.timer.stop();
    this.setState({
      running: false,
    });
  };

  onToggleCell = (row: number, column: number) => {
    this.setState(({ board }) => ({
      board: changeCell(board, row, column, !board[row][column]),
    }));
  };

  setPreset(preset: Preset) {
    this.pauseLife();
    this.setState(({ boardSize }) => {
      return {
        boardSize: preset.minSize > boardSize ? preset.minSize : boardSize,
        board: changeBoardSize(preset.pattern, boardSize),
      };
    });
  }

  get boardSizeButtons(): ButtonProps[] {
    return [
      {
        text: 'Increase (+)',
        onClick: () => this.changeBoardSize(1),
      },

      {
        text: 'Decrease (-)',
        onClick: () => this.changeBoardSize(-1),
      },
    ];
  }

  get controlButtons(): ButtonProps[] {
    const { running } = this.state;
    return [
      {
        text: 'Prev gen',
        onClick: this.prevGeneration,
        disabled: !Boolean(this.history.length),
      },

      {
        text: 'Next gen',
        onClick: this.nextGeneration,
      },
      {
        text: 'Play',
        onClick: this.startLife,
        disabled: running,
      },
      {
        text: 'Pause',
        onClick: this.pauseLife,
        disabled: !running,
      },
    ];
  }

  render() {
    const { board } = this.state;
    return (
      <LifeGame
        boardSizeButtons={this.boardSizeButtons}
        controlButtons={this.controlButtons}
        board={board}
        setPreset={(preset) => this.setPreset(preset)}
        onCellClick={this.onToggleCell}
      />
    );
  }
}
