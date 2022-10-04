import { Typography } from 'components/Typography';

import './FallbackMessage.style.css';

interface ErrorMessageProps {
  hasError: boolean;
  message: string;
}

export function FallbackMessage({ hasError, message }: ErrorMessageProps) {
  return (
    <div className="centered-row">
      <Typography
        semibold
        as="h5"
        customStyle={hasError ? 'text-red-400' : 'text-slate-400'}
      >
        {hasError ? 'Ocorreu um erro, atualize a página' : message}
      </Typography>
    </div>
  );
}
