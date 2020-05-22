import {createAsyncThunk} from '@reduxjs/toolkit';
import {mockProducts} from '../../models/IProduct';

/** fetch products from the server */
export const loadProducts = createAsyncThunk(
  'product/load',
  async (_: void) => {
    return mockProducts;
  },
);
