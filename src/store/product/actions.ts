import {createAsyncThunk} from '@reduxjs/toolkit';
import {firestore} from '../../services/firebase';

import Collections from '../../constants/collections';

/** fetch products from the server */
export const loadProducts = createAsyncThunk(
  'product/load',
  async (_: void) => {
    const products = await firestore
      .collection(Collections.PRODUCTS)
      .orderBy('name')
      .get();

    return products.docs.map(p => ({
      id: p.id,
      name: p.data().name,
    }));
  },
);
