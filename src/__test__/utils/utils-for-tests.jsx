import PropTypes from 'prop-types';
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// As a basic setup, import your same slice reducers
import categoriesReducer from '../../redux/categories/categoriesSlice';

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { categories: categoriesReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>{children}</Provider>
    );
  }

  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export { renderWithProviders as default };
