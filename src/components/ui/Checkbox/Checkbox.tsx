import { FC, useId, useRef } from 'react';
import style from './checkbox.module.scss';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label: string;
  handleCheckboxInput?: (isChecked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
}

const Checkbox: FC<InputProps> = ({ label, handleCheckboxInput, ...props }: InputProps) => {
  const id = useId() + label;
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className={style['checkbox-container']}>
      <input
        type="checkbox"
        className={style.checkbox}
        id={id}
        ref={ref}
        onChange={(event) => {
          handleCheckboxInput?.(event.target.checked);

          if (!event.target.checked) {
            ref.current?.blur();
          }
        }}
        {...props}
      />
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
