import { describe, test, expect, screen, customRender } from 'test';

import { Loader } from 'components/Loader/Loader';

describe('Loader', () => {
  test('Should render bubbles variant', async () => {
    customRender(<Loader variant="bubbles" />);

    const bubbles = await screen.findAllByTestId('bubble');

    expect(bubbles).toHaveLength(5);
  });

  test('Should render bar variant', async () => {
    customRender(<Loader variant="bar" />);

    const bar = await screen.findByText('Loading...');

    expect(bar).toBeInTheDocument();
  });

  test('Should render spinner variant', async () => {
    customRender(<Loader variant="spinner" />);

    const spinner = await screen.findByText('Loading...');

    expect(spinner).toBeInTheDocument();
  });
});
