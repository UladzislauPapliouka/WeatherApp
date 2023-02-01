import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomSelect from './index';

test('Custom select render', () => {
  render(<CustomSelect
    selected="variant1"
    onChangeSelected={(e) => {
      console.log(e);
    }}
    options={['variant1', 'variant2']}
  />);
  const linkElement = screen.getByText(/variant1/i);
  expect(linkElement).toBeInTheDocument();
});
