import React from 'react';
import Typography, { VariantMap } from '../ui/Typography/Typography';
import style from './icon-with-text.module.scss';
import clsx from 'clsx';

interface IconWithTextProps {
  IconComponent: React.ReactNode;
  text: string;
  variant?: keyof typeof VariantMap;
  active?: boolean;
}

const IconWithText: React.FC<IconWithTextProps> = ({ IconComponent, text, variant = 'span', active }) => {
  return (
    <div className={clsx(style['icon-with-text'], { [style['active']]: active })}>
      {IconComponent}
      <Typography variant={variant}>{text}</Typography>
    </div>
  );
};

export default IconWithText;
