import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import IProduct, {mockProducts} from '../../models/IProduct';
import {RootState} from '..';

interface ISliceState {
  products: IProduct[];
}

const initialState: ISliceState = {
  products: [],
};

/** fetch products from the server */
export const loadProducts = createAsyncThunk(
  'product/load',
  async (_: void) => {
    return mockProducts;
  },
);

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
