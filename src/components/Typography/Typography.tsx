import { ReactNode, useMemo } from 'react';

import './Typography.style.css';

interface TypographyProps {
  children: ReactNode;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  bold?: boolean;
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
  semibold?: boolean;
  decoration?: 'underline' | 'overline' | 'line-through' | 'no-underline';
  customStyle?: string;
}

export function Typography({
  as = 'p',
  bold = false,
  semibold = false,
  children,
  decoration = 'no-underline',
  customStyle = '',
  size,
}: TypographyProps) {
  const DynamicComponent = useMemo(() => as, [as]);

  const fontSize = useMemo(
    () =>
      size
        ? {
            xs: 'text-xs',
            sm: 'text-sm',
            base: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'font2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
            '5xl': 'text-5xl',
            '6xl': 'text-6xl',
            '7xl': 'text-7xl',
            '8xl': 'text-8xl',
            '9xl': 'text-9xl',
          }[size]
        : '',
    [size],
  );

  return (
    <DynamicComponent
      className={`typography ${customStyle} ${decoration} ${fontSize} ${
        bold ? 'font-bold' : semibold ? 'font-semibold' : ''
      }`}
    >
      {children}
    </DynamicComponent>
  );
}
