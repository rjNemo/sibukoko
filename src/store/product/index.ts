import {createSlice} from '@reduxjs/toolkit';
import {loadProducts} from './actions';
import {RootState} from '..';

import IProduct from '../../models/IProduct';
import ICartItem from '../../models/ICart';

interface ISliceState {
  products: IProduct[];
  cart: ICartItem[];
}

const initialState: ISliceState = {
  products: [],
  cart: [],
};

/** product state slice */
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;

      const itemInCart: ICartItem | undefined = state.cart.find(
        item => item.product.id === id,
      );

      if (!!itemInCart) {
        itemInCart.quantity++;
      } else {
        const product = state.products.find(p => p.id === id);
        if (!!product) {
          const newCartItem: ICartItem = {
            product,
            quantity: 1,
          };
          return {
            ...state,
            cart: [...state.cart, newCartItem],
          };
        }
      }
    },
  },
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

export const {addToCart} = productSlice.actions;

/** product reducer */
export default productSlice.reducer;
