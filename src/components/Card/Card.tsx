import { ReactNode, useMemo } from 'react';

import { Button } from 'components/Button';

import { Loader } from 'components/Loader/Loader';
import { Typography } from 'components/Typography';
import { TwMaxWidthSize } from 'models/TwSizes';

import './Card.style.css';
import { Ordenation } from 'models/Ordenation';

interface Actions {
  order?: Ordenation;
  accept: {
    label: string;
    onAccept: () => void;
  };
  cancel: {
    label: string;
    onCancel: () => void;
  };
}

interface CardProps {
  children: ReactNode;
  title?: ReactNode;
  icon?: ReactNode;
  handleClick?: () => void;
  actions?: Actions;
  width?: string;
  loading?: boolean;
  maxWidth?: TwMaxWidthSize;
}

export function Card({
  children,
  icon,
  title,
  actions,
  loading,
  maxWidth,
  handleClick,
}: CardProps) {
  const handleActionsOrder = () => {
    const order = actions?.order ?? 'normal';

    const OrderMap = {
      reverse: 'flex-row-reverse justify-start',
      normal: 'flex-row',
    };

    return OrderMap[order];
  };

  const computedMaxWidth = useMemo(
    () => (maxWidth ? `max-w-${maxWidth}` : ''),
    [maxWidth],
  );

  return (
    <div
      className={`card ${computedMaxWidth}`}
      data-testid="card"
    >
      {(title || icon) && (
        <header className="card__header">
          <Typography
            semibold
            as="h5"
            customStyle="monochrome-text"
          >
            {title}
          </Typography>

          {icon && (
            <span className="card__header-icon">
              <Button onClick={handleClick}>{icon}</Button>
            </span>
          )}
        </header>
      )}

      <main className="card__main-content">
        {loading ? <Loader variant="bubbles" /> : children}
      </main>

      {actions && (
        <footer className={'card__actions ' + handleActionsOrder()}>
          <Button onClick={actions.accept.onAccept}>
            {actions.accept.label}
          </Button>
          <Button onClick={actions.cancel.onCancel}>
            {actions.cancel.label}
          </Button>
        </footer>
      )}
    </div>
  );
}
