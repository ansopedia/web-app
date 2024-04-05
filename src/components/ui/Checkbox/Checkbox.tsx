import { FC, useId } from 'react';
import style from './checkbox.module.scss';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label: string;
  checked?: boolean;
  disabled?: boolean;
}

const Checkbox: FC<InputProps> = ({ label, ...props }: InputProps) => {
  const id = `${useId()}-${label}`;

  return (
    <div className={style['checkbox-container']}>
      <input type="checkbox" className={style['checkbox']} id={id} onChange={props.onChange} {...props} />
      <label htmlFor={id} className={style['label']}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
