import React from 'react';
import { render, screen } from '@testing-library/react';

import CustomSelect from '../components/CustomSelect';

test('Custom select render', () => {
  let testVar = 'variant1';
  render(
    <CustomSelect
      selected={testVar}
      onChangeSelected={(value) => {
        testVar = value;
      }}
      options={['variant1', 'variant2']}
    />,
  );
  const linkElement = screen.getByText(/variant1/i);
  expect(linkElement).toBeInTheDocument();
});
