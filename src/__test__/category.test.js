import { screen } from '@testing-library/react';
import  Category  from '../components/Category';
import { renderWithProviders } from '../__test__/utils/utils-for-tests'
import '@testing-library/jest-dom/extend-expect';


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));

test('renders Category', () => {
  const category="technology";
  const stokesLength=11;

  const tree = renderWithProviders(<Category
    category={category}
    numItems={stokesLength}
     />);
  expect(tree).toMatchSnapshot();

  expect(screen.getByText(/technology/i)).toBeInTheDocument();
});
