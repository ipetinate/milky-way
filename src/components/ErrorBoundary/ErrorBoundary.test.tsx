import { describe, test, expect, screen, customRender } from 'test';

import { ErrorBoundary } from './ErrorBoundary';

import { ProblematicComponent } from 'test/stubs/ProblematicComponent';

describe('ErrorBoundary', () => {
  test('Should render error boundary fallback message', async () => {
    customRender(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>,
    );

    expect(
      screen.getByText(
        'Desculpe, mas algo saiu fora do esperado. Atualize a página para corrigir!',
      ),
    ).toBeInTheDocument();
  });
});
