import React from 'react';
import { render, screen } from '@testing-library/react';
import { Chip } from './Chip';

test('Badge render', () => {
  render(<Chip text="test" />);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
