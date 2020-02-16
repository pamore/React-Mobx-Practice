import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App view', () => {
  it('should render the TODO List', () => {
    const { getByText } = render(<App />);
    const toDoHeader = getByText("TO DO List -");
    expect(toDoHeader).toBeInTheDocument();
  });
});

