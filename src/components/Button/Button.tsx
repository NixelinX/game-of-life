import React, { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button className={s.Button} {...props}>
      {text}
    </button>
  );
};
