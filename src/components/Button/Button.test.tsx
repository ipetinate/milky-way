import { Button } from './Button';
import { describe, test, expect, screen, customRender } from 'test';

describe('Button', () => {
  test('Should render a base button with children', async () => {
    customRender(<Button>Button</Button>);

    const button = await screen.findByRole('button', { name: 'Button' });

    expect(button).toBeInTheDocument();
  });

  test('Should render a base button with label prop', async () => {
    customRender(<Button label="Button" />);

    const button = await screen.findByRole('button', { name: 'Button' });

    expect(button).toBeInTheDocument();
  });
});
