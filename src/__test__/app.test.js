import { screen } from '@testing-library/react';
import App from '../App';
import renderWithProviders from './utils/utils-for-tests';

test('renders App', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/Stokes by Industry/i);
  expect(linkElement).toBeInTheDocument();
});
