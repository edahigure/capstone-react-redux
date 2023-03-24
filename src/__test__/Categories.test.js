import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitFor, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import userEvent from '@testing-library/user-event';
import renderWithProviders from './utils/utils-for-tests';
import Categories from '../pages/Categories';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => mockedUsedNavigate,
}));

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
const handlers = [
  rest.get('/api/user', (req, res, ctx) => res(ctx.json(
    {
      categoriesList: [
        {
          category: 'Communication Services',
          stokes: [
            'ATVI',
            'GOOGL',
            'GOOG',
            'CHTR',
            'CMCSA',
            'EA',
            'META',
            'NFLX',
            'SIRI',
            'TMUS',
            'WBD',
          ],
        },
        {
          category: 'Technology',
          stokes: [
            'ADBE',
            'AMD',
            'ADI',
            'ANSS',
            'AAPL',
            'AMAT',
            'ASML',
            'TEAM',
            'ADSK',
            'AVGO',
            'CDNS',
            'CSCO',
            'CTSH',
            'CRWD',
            'DDOG',
            'ENPH',
            'FISV',
            'FTNT',
            'GFS',
            'INTC',
            'INTU',
            'KLAC',
            'LRCX',
            'MRVL',
            'MCHP',
            'MU',
            'MSFT',
            'NVDA',
            'NXPI',
            'PANW',
            'QCOM',
            'SNPS',
            'TXN',
            'WDAY',
            'ZM',
            'ZS',
          ],
        },
        {
          category: 'Industrials',
          stokes: [
            'ADP',
            'CTAS',
            'CSX',
            'FAST',
            'HON',
            'ODFL',
            'PCAR',
            'PAYX',
            'VRSK',
          ],
        },
        {
          category: 'Consumer Cyclical',
          stokes: [
            'ABNB',
            'AMZN',
            'BKNG',
            'CPRT',
            'EBAY',
            'JD',
            'LCID',
            'LULU',
            'MAR',
            'MELI',
            'ORLY',
            'PDD',
            'RIVN',
            'ROST',
            'SBUX',
            'TSLA',
          ],
        },
        {
          category: 'Healthcare',
          stokes: [
            'ALGN',
            'AMGN',
            'AZN',
            'BIIB',
            'DXCM',
            'GILD',
            'IDXX',
            'ILMN',
            'ISRG',
            'MRNA',
            'REGN',
            'SGEN',
            'VRTX',
            'WBA',
          ],
        },
        {
          category: 'Utilities',
          stokes: [
            'AEP',
            'CEG',
            'EXC',
            'XEL',
          ],
        },
        {
          category: 'Energy',
          stokes: [
            'BKR',
            'FANG',
          ],
        },
        {
          category: 'Real Estate',
          stokes: [
            'CSGP',
          ],
        },
        {
          category: 'Consumer Defensive',
          stokes: [
            'COST',
            'DLTR',
            'KDP',
            'KHC',
            'MDLZ',
            'MNST',
            'PEP',
          ],
        },
        {
          category: 'Financial Services',
          stokes: [
            'PYPL',
          ],
        },
      ],
      stokes: [
        'ADP',
        'CTAS',
        'CSX',
        'FAST',
        'HON',
        'ODFL',
        'PCAR',
        'PAYX',
        'VRSK',
      ],
      category: 'Industrials',
      companyName: '',
      price: '',
      image: '',
      currentStoke: '',
      status: 'idle',
    },
  ), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives a user after clicking the fetch user button', async () => {
  // const user = userEvent.setup();
  renderWithProviders(<Categories />);

  expect(screen.getByText(/Technology/i)).toBeInTheDocument();

  await waitFor(() => {
    userEvent.click(screen.getByText('Technology'));
  });
});
