import { FC } from 'react';
import { Observable } from '@legendapp/state';
import { Memo, Reactive, Show } from '@legendapp/state/react';

import Typography from '../Typography/Typography';

import style from './text-area.module.scss';

interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  $value: Observable<string>;
  $error: Observable<string>;
  className?: string;
  label?: string;
}

const TextArea: FC<ITextAreaProps> = ({ $value, label, $error, className, ...props }) => {
  const styleName = `${style.textarea} ${className || ''}`;

  return (
    <div className={style['textarea-group']}>
      {label && <Typography variant="span">{label}</Typography>}
      <Reactive.textarea $value={$value} className={styleName} {...props} />
      <Show if={$error}>
        <Typography color="error" variant="span">
          <Memo>{$error}</Memo>
        </Typography>
      </Show>
    </div>
  );
};

export default TextArea;
