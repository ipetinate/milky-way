import { describe, test, expect, screen, customRender, waitFor } from 'test';

import { Image } from './Image';

describe('Image', () => {
  test(
    'Should render a loader until image has fully loaded',
    async () => {
      customRender(
        <Image
          src="/test.svg"
          alt="Teste"
        />,
      );

      const bubbles = await screen.findAllByTestId('bubble');

      expect(bubbles).toHaveLength(5);

      await waitFor(
        async () => {
          expect(await screen.findByRole('img', { name: 'Teste' }));
        },
        { timeout: 3000 },
      );
    },
    { timeout: 3000 },
  );
});
