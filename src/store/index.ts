import {configureStore} from '@reduxjs/toolkit';
import productReducer from './product';

/** application state store */
const store = configureStore({
  reducer: {
    productReducer,
  },
});

export default store;
