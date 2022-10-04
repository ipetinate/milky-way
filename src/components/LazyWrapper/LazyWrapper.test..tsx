import { describe, test, expect, screen, customRender } from 'test';

import { LazyLoading } from './LazyLoading';

describe('LazyLoading', () => {
  test('Should testCase', () => {
    customRender(
      <LazyLoading>
        <div>
          <p>Children</p>
        </div>
      </LazyLoading>,
    );

    expect(screen.getByText('children')).toBeInTheDocument();
  });
});
