import React, { FC } from 'react';
import style from './separator.module.scss';

interface ISeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

const Separator: FC<ISeparatorProps> = ({ ...props }) => {
  return <hr className={style.separator} {...props} />;
};

export default Separator;
