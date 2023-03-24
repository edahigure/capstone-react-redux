import { screen } from '@testing-library/react';
import Stoke from '../components/Stoke';
import renderWithProviders from './utils/utils-for-tests';
import '@testing-library/jest-dom/extend-expect';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => mockedUsedNavigate,
}));

test('renders Stoke', () => {
  const stoke = 'ABCD';
  const tree = renderWithProviders(<Stoke
    stoke={stoke}
  />);
  expect(tree).toMatchSnapshot();
  expect(screen.getByText(/ABCD/i)).toBeInTheDocument();
});
