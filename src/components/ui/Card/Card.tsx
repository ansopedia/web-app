import { FC } from 'react';
import style from './card.module.scss';
import clsx from 'clsx';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: FC<ICardProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(style.card, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
