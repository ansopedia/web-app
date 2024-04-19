import { FC } from 'react';
import style from './input-group.module.scss';
import Typography from '../Typography/Typography';
import Input from '../Input/Input';

import { InputProps } from '../Input/Input';

interface IInputGroupProps extends InputProps {
  label: string;
}

const InputGroup: FC<IInputGroupProps> = ({ label, ...props }) => {
  return (
    <div className={style['input-group']}>
      <Typography variant="span">{label}</Typography>
      <Input {...props} />
    </div>
  );
};

export default InputGroup;
