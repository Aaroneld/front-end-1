import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

test('app renders without crashing', () => {
  const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
  const styledUp = getByText(/styled components/i);
  expect(styledUp).toBeInTheDocument();
});
