import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStokes = createAsyncThunk('stokes/fetchStokes', async (market) => {
  const companies = {};
  const urlNasdaqConstituent = `https://financialmodelingprep.com/api/v3/${market}?apikey=0e7be2953a0869d9ffdd7b861065c42a`;

  try {
    const response = axios.get(urlNasdaqConstituent);

    const promise2 = response.then((response) => {
      for (let i = 0; i < response.data.length; i += 1) {
        companies[response.data[i].sector] = [];
      }
      for (let i = 0; i < response.data.length; i += 1) {
        companies[response.data[i].sector].push(response.data[i].symbol);
      }
    });
    await promise2;

    return companies;
  } catch (err) {
    return err.message;
  }
});

export const fetchStokesPrice = createAsyncThunk('stokes/fetchStokesPrice', async (symbol) => {
  const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=0e7be2953a0869d9ffdd7b861065c42a`;

  let result;
  try {
    const response = axios.get(url);
    const promise2 = response.then((response) => {
      const { companyName, price, image } = response.data[0];
      result = {
        symbol, companyName, price, image,
      };
    });
    await promise2;
    return result;
  } catch (err) {
    return err.message;
  }
});

/* const initialState = {
  categoriesList: [],
  stokes: [],
  category: 'Industrials',
  companyName: '',
  price: '',
  image: '',
  currentStoke: '',
  status: 'idle',
}; */
const initialState = {
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
  market: 'nasdaq_constituent',
  category: 'Industrials',
  companyName: '',
  price: '',
  image: '',
  currentStoke: '',
  status: 'idle',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateStokes: (state, action) => {
      const { category } = action.payload;
      let id;
      for (let i = 0; i < state.categoriesList.length; i += 1) {
        if (state.categoriesList[i].category === category) {
          id = i;
        }
      }
      const newStokes = state.categoriesList[id].stokes;
      return {
        ...state, stokes: newStokes, category, status: 'update',
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStokes.fulfilled, (state, action) => {
        const newCategoryList = [];
        Object.keys(action.payload).forEach((cat) => {
          newCategoryList.push({ category: cat, stokes: action.payload[cat] });
        });
        return { categoriesList: newCategoryList, status: 'success' };
      });
    builder
      .addCase(fetchStokesPrice.fulfilled, (state, action) => ({
        ...state,
        currentStoke: action.payload.symbol,
        companyName: action.payload.companyName,
        price: action.payload.price,
        image: action.payload.image,
      }));
  },
});

export const { updateStokes } = categoriesSlice.actions;
export default categoriesSlice.reducer;
