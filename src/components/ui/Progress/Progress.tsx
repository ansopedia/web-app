import React, { FC } from 'react';
import Typography from '../Typography/Typography';
import style from './progress.module.scss';

interface IProgressProps extends React.ProgressHTMLAttributes<HTMLProgressElement> {}

const Progress: FC<IProgressProps> = ({ ...props }) => {
  return (
    <div className={style['progress-wrapper']}>
      <Typography variant="span">{props.value}% completed</Typography>
      <progress {...props} className={style.progress}></progress>
    </div>
  );
};

export default Progress;
