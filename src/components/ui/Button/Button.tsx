import React, { FC } from 'react';
import style from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'text' | 'contained' | 'outlined';
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, variant, ...props }: ButtonProps) => {
  const className = style[variant];

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
