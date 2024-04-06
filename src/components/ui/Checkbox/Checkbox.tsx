import { FC, useId } from 'react';
import style from './checkbox.module.scss';
import { Memo } from '@legendapp/state/react';
import { Observable } from '@legendapp/state';

interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label: string;
  state$: Observable<{ checked: boolean }>;
}

const Checkbox: FC<InputProps> = ({ label, state$, ...props }: InputProps) => {
  const id = `${useId()}-${label}`;

  return (
    <div className={style['checkbox-container']}>
      <Memo>
        {() => (
          <input
            checked={!props.disabled && state$.checked.get()}
            className={style['checkbox']}
            id={id}
            onChange={() => state$.checked.set((prev) => !prev)}
            type="checkbox"
            {...props}
          />
        )}
      </Memo>
      <label htmlFor={id} className={style['label']}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
