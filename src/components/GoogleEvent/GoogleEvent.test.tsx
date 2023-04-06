import React from 'react';
import { render, screen } from '@testing-library/react';
import { GoogleEvent } from './index';

test('GoogleEvent render', () => {
  render(<GoogleEvent time="9:00" eventTitle="Wake up" />);
  const linkElement1 = screen.getByText(/9:00/i);
  const linkElement2 = screen.getByText(/Wake up/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
