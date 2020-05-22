import {configureStore} from '@reduxjs/toolkit';
import productReducer from './product';

/** Application state store */
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

/** Store's state type */
export type RootState = ReturnType<typeof store.getState>;

export default store;
