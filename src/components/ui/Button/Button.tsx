import React, { FC } from 'react';
import style from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'contained' | 'outlined';
  className?: string;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, className, variant = 'contained', ...props }: ButtonProps) => {
  const styleClass = `${style[variant]} ${className}`;

  return (
    <button className={styleClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
