import {createSlice} from '@reduxjs/toolkit';
import IProduct from '../../models/IProduct';
import {RootState} from '..';

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
});

/** extract product list from the store */
export const selectProducts = (state: RootState) => ({
  products: state.product.products,
});

/** product reducer */
export default productSlice.reducer;
