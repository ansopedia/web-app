import { FC } from 'react';
import style from './input.module.scss';
import Image from 'next/image';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  className?: string;
  icon?: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({ className, icon, ...props }: InputProps) => {
  const styleName = `${style.input} ${className || ''}`;

  return (
    <div className={style['input-group']}>
      {icon && <Image className={style.icon} alt={icon} src={icon} />}
      <input {...props} className={styleName} />
    </div>
  );
};

export default Input;
