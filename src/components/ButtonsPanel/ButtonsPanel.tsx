import React, { FC } from 'react';
import s from './ButtonsPanel.module.scss';
import { Button, ButtonProps } from '../Button/Button';

type ButtonsPanelProps = {
  title: string;
  buttons: ButtonProps[];
};

export const ButtonsPanel: FC<ButtonsPanelProps> = ({ title, buttons }) => {
  return (
    <section className={s.ButtonsPanel}>
      <h4 className={s.ButtonsPanel__header}>{title}</h4>
      <div className={s.ButtonsPanel__buttons}>
        {buttons.map((buttonProps, index) => (
          <div key={index} className={s.ButtonsPanel__button}>
            <Button {...buttonProps} />
          </div>
        ))}
      </div>
    </section>
  );
};
