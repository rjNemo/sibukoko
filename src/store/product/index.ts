import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import IProduct, {mockProducts} from '../../models/IProduct';
import {RootState} from '..';

interface ISliceState {
  products: IProduct[];
}

const initialState: ISliceState = {
  products: mockProducts,
};
/** product state slice */
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    /**
     * store the received products in the store
     * @param products IProduct[]
     */
    loadProducts: (state, action: PayloadAction<IProduct[]>) => ({
      ...state,
      products: action.payload,
    }),
  },
});

/** extract product list from the store */
export const selectProducts = (state: RootState) => ({
  products: state.product.products,
});

// export actions
export const {loadProducts} = productSlice.actions;

/** product reducer */
export default productSlice.reducer;
