import { ReactNode, Suspense } from 'react';

import { ErrorBoundary } from 'components/ErrorBoundary';

import { Loader } from 'components/Loader';

interface LazyLoadingProps {
  children: ReactNode;
}

export function LazyLoading({ children }: LazyLoadingProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader variant="bubbles" />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
