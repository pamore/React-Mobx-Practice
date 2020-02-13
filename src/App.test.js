import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should render the TODO List', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("TO DO List -");
  expect(linkElement).toBeInTheDocument();
});
