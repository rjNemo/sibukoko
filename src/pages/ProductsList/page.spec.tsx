import React from 'react';
import {render} from '@testing-library/react';
import {ProductsListPage} from '.';
import IProduct, {mockProducts} from '../../models/IProduct';
import {ActionCreatorWithPayload} from '@reduxjs/toolkit';

describe('Product list', () => {
  mockProducts.forEach(p =>
    it('displays products', () => {
      const loadProducts = jest.fn().mockName('loadProducts');
      const {getByText} = render(
        <ProductsListPage
          products={mockProducts}
          loadProducts={loadProducts}
        />,
      );
      expect(getByText(p.name)).not.toBeNull();
    }),
  );

  it('loads products at first render', () => {
    const loadProducts = jest.fn().mockName('loadProducts');
    const context = render(
      <ProductsListPage products={mockProducts} loadProducts={loadProducts} />,
    );
    expect(loadProducts).toHaveBeenCalled();
  });
});
