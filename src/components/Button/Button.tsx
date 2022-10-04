import { HTMLAttributes, ReactElement, ReactNode, useCallback } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | ReactElement;
  label?: string;
  size?: ButtonSize;
}

export function Button({ children, label, size = 'md', ...props }: ButtonProps) {
  const SizeMap = {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  };

  const generateButtonStyle = useCallback(() => {
    let style = '';

    if (size) style += SizeMap[size];

    return style;
  }, [size]);

  return (
    <button {...props} className={generateButtonStyle()}>
      {label ?? children}
    </button>
  );
}
