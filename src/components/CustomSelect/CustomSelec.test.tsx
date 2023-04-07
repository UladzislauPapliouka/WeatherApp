import React from 'react';
import { render, screen } from '@testing-library/react';

import CustomSelect from './index';

test('Custom select render', () => {
  let testVar = 'variant1';
  render(
    <CustomSelect
      selected={testVar}
      onChangeSelected={(e) => {
        testVar = e.target.value;
      }}
      options={['variant1', 'variant2']}
    />,
  );
  const linkElement = screen.getByText(/variant1/i);
  expect(linkElement).toBeInTheDocument();
});
