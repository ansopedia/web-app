import { FC } from 'react';
import style from './typography.module.scss';

const colorMap = {
  primary: 'primary',
  secondary: 'secondary',
  default: 'default',
  error: 'error',
};

const variantMap = {
  h1: 'heading1',
  h2: 'heading2',
  h3: 'heading3',
  h4: 'heading4',
  h5: 'heading5',
  h6: 'heading6',
  p: 'paragraph',
  span: 'span',
};

interface TypographyProps {
  variant?: keyof typeof variantMap;
  color?: keyof typeof colorMap;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const Typography: FC<TypographyProps> = ({
  variant = 'p',
  color = 'default',
  className,
  children,
  align = 'left',
}: TypographyProps) => {
  const colorClass = colorMap[color];
  const variantClass = variantMap[variant];
  const styleName = `${style[variantClass]} ${style[colorClass]} ${style[align]} ${className}`;
  const Component = variant;

  return <Component className={styleName}>{children}</Component>;
};

export default Typography;
