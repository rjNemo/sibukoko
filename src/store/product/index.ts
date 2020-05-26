import {createSlice} from '@reduxjs/toolkit';
import {loadProducts} from './actions';
import {RootState} from '..';

import IProduct, {mockProducts} from '../../models/IProduct';
import ICart, {mockCart} from '../../models/ICart';

interface ISliceState {
  products: IProduct[];
  cart: ICart;
}

const initialState: ISliceState = {
  products: mockProducts,
  cart: mockCart,
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

/** extract cart list from the store */
export const selectCart = (state: RootState) => ({
  cart: state.product.cart,
});

/** product reducer */
export default productSlice.reducer;
