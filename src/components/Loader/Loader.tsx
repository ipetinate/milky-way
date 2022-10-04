import './Loader.style.css';

export type LoaderVariant = 'spinner' | 'bubbles' | 'bar';

interface LoaderProps {
  variant: LoaderVariant;
}

export function Loader({ variant }: LoaderProps) {
  return (
    <div
      data-testid="loader"
      className="centered-row"
    >
      {variant === 'spinner' && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {variant === 'bar' && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {variant === 'bubbles' && (
        <div className="loading">
          <div
            data-testid="bubble"
            className="dot"
          />
          <div
            data-testid="bubble"
            className="dot"
          />
          <div
            data-testid="bubble"
            className="dot"
          />
          <div
            data-testid="bubble"
            className="dot"
          />
          <div
            data-testid="bubble"
            className="dot"
          />
        </div>
      )}
    </div>
  );
}
