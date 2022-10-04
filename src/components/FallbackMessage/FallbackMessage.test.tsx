import { FallbackMessage } from './FallbackMessage';
import { describe, test, expect, screen, customRender } from 'test';

describe('Fallback Message', () => {
  test('Should render error message', async () => {
    customRender(
      <FallbackMessage
        hasError={true}
        message="Atualize a página"
      />,
    );

    expect(
      screen.getByText('Ocorreu um erro, atualize a página'),
    ).toBeInTheDocument();
  });

  test('Should render passed by prop message', async () => {
    customRender(
      <FallbackMessage
        hasError={false}
        message="Atualize a página"
      />,
    );

    expect(screen.getByText('Atualize a página')).toBeInTheDocument();
  });
});
