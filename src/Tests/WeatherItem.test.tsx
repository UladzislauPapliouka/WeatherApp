import React from 'react';
import { render, screen } from '@testing-library/react';

import WeatherItem from '../components/WeatherItem/index';
import { WeatherIconVariants } from '../types/propsTypes/weatherIcon';

test('WeatherItem render', () => {
  render(
    <WeatherItem
      chipText="Today"
      weatherIcon={WeatherIconVariants.Sun}
      temperature={-10}
    />,
  );
  const linkElement1 = screen.getByText(/Today/i);
  const linkElement2 = screen.getByText(/-10°/i);
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
