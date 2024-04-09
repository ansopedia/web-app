import { FC } from 'react';
import style from './input.module.scss';
import Image from 'next/image';
import { Memo, Reactive, Show } from '@legendapp/state/react';
import { Observable } from '@legendapp/state';
import Typography from '../Typography/Typography';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  className?: string;
  icon?: string;
  placeholder: string;
  $value: Observable<string>;
  $error: Observable<string>;
}

const Input: FC<InputProps> = ({ className, icon, $value, $error, ...props }: InputProps) => {
  const styleName = `${style.input} ${className || ''}`;

  return (
    <div>
      <div className={style['input-group']}>
        {icon && <Image className={style.icon} alt={icon} src={icon} />}
        <Reactive.input $value={$value} className={styleName} {...props} />
      </div>
      <Show if={$error}>
        <Typography color="error" variant="span">
          <Memo>{$error}</Memo>
        </Typography>
      </Show>
    </div>
  );
};

export default Input;
