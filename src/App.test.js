import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the business homepage', () => {
  render(<App />);
  expect(screen.getByText(/mission, vision, products/i)).toBeInTheDocument();
});
