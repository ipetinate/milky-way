import { describe, test, expect, screen, customRender } from 'test';

import { Divider } from './Divider';

describe('Divider', () => {
  test('Should render divider', async () => {
    customRender(<Divider />);

    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });
});
