import React from 'react';
import Typography, { VariantMap } from '../Typography/Typography';
import style from './icon-with-text.module.scss';

interface IconWithTextProps {
  IconComponent: React.ReactNode;
  text: string;
  variant?: keyof typeof VariantMap;
}

const IconWithText: React.FC<IconWithTextProps> = ({ IconComponent, text, variant = 'span' }) => (
  <div className={style['icon-with-text']}>
    {IconComponent}
    <Typography variant={variant}>{text}</Typography>
  </div>
);

export default IconWithText;
