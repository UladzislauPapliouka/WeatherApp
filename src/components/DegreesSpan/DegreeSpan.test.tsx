import React from 'react';
import { render, screen } from '@testing-library/react';
import { DegreesSpan } from './DegreesSpan';

test('DegreeSpan render', () => {
  render(<DegreesSpan value={10} />);
  const linkElement = screen.getByText(/10/i);
  expect(linkElement).toBeInTheDocument();
});
