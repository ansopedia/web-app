import React from 'react';
import style from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'text' | 'contained' | 'outlined' | 'icon';
  children?: React.ReactNode;
}

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const className = style[variant];

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
