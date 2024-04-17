import style from './card.module.scss';
import clsx from 'clsx';

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: ICardProps) => {
  return <div className={clsx(style.card, className)}>{children}</div>;
};

export default Card;
