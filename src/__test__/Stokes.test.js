import React from 'react';
import { waitFor, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import userEvent from '@testing-library/user-event';
import renderWithProviders from './utils/utils-for-tests';
import Stokes from '../pages/Stokes';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => mockedUsedNavigate,
}));

test('fetches & receives a user after clicking user button', async () => {
  renderWithProviders(<Stokes />);
  expect(screen.getByText(/ADP/i)).toBeInTheDocument();
  await waitFor(() => {
    userEvent.click(screen.getByText('ADP'));
  });
});
