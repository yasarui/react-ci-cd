import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Everything before you go/i);
  expect(linkElement).toBeInTheDocument();
});
