import { Card } from './Card';
import { describe, test, expect, screen, customRender } from 'test';

describe('Card', () => {
  test('Should render a card with children', async () => {
    customRender(
      <Card title="Card de teste">
        <p>Conteudo</p>
      </Card>,
    );

    const children = await screen.findByText('Conteudo');
    const title = await screen.findByText('Card de teste');

    expect(children).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
