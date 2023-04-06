import React from 'react';
import { render, screen } from '@testing-library/react';

import DateBlock from './index';

test('DateBlock render', () => {
  render(<DateBlock />);
  const linkElement = screen.getByText(/AM|PM/i);
  expect(linkElement).toBeInTheDocument();
});
