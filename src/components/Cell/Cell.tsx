import React, { FC } from 'react';
import s from './Cell.module.scss';
import classNames from 'classnames';

type CellProps = {
  isAlive: boolean;
  onClick: (event) => void;
};

export const Cell: FC<CellProps> = ({ isAlive, onClick }) => {
  return <div className={classNames(s.Cell, { [s.Cell_alive]: isAlive })} onClick={onClick} />;
};
