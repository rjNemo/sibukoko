import {createSlice} from '@reduxjs/toolkit';
import {loadProducts} from './actions';
import {RootState} from '..';

import IProduct from '../../models/IProduct';

interface ISliceState {
  products: IProduct[];
}

const initialState: ISliceState = {
  products: [],
};

/** product state slice */
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

/** extract product list from the store */
export const selectProducts = (state: RootState) => ({
  products: state.product.products,
});

/** product reducer */
export default productSlice.reducer;
