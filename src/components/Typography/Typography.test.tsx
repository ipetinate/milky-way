import { Typography } from './Typography';
import { describe, test, expect, screen, customRender } from 'test';

describe('Typography', () => {
  test('Should render as <p>', async () => {
    customRender(<Typography as="p">Text</Typography>);

    expect(await screen.findByText('Text')).toBeInTheDocument();
  });

  test('Should render as <span>', async () => {
    customRender(<Typography as="span">Text</Typography>);

    expect(await screen.findByText('Text')).toBeInTheDocument();
  });

  test('Should render as <h1>', async () => {
    customRender(<Typography as="h1">Text</Typography>);

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Text' }),
    ).toBeInTheDocument();
  });

  test('Should render as <h2>', async () => {
    customRender(<Typography as="h2">Text</Typography>);

    expect(
      await screen.findByRole('heading', { level: 2, name: 'Text' }),
    ).toBeInTheDocument();
  });

  test('Should render as <h3>', async () => {
    customRender(<Typography as="h3">Text</Typography>);

    expect(
      await screen.findByRole('heading', { level: 3, name: 'Text' }),
    ).toBeInTheDocument();
  });

  test('Should render as <h4>', async () => {
    customRender(<Typography as="h4">Text</Typography>);

    expect(
      await screen.findByRole('heading', { level: 4, name: 'Text' }),
    ).toBeInTheDocument();
  });

  test('Should render as <h5>', async () => {
    customRender(<Typography as="h5">Text</Typography>);

    expect(
      await screen.findByRole('heading', { level: 5, name: 'Text' }),
    ).toBeInTheDocument();
  });

  test('Should render as <h6>', async () => {
    customRender(<Typography as="h6">Text</Typography>);

    expect(
      await screen.findByRole('heading', { level: 6, name: 'Text' }),
    ).toBeInTheDocument();
  });
});
