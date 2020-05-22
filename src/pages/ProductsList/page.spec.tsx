import React from 'react';
import {render} from '@testing-library/react';
import ProductsListPage from '.';
import {mockProducts} from '../../models/IProduct';

describe('Product list', () => {
  const {getByText} = render(<ProductsListPage products={mockProducts} />);
  mockProducts.forEach(p =>
    it('displays products', () => {
      expect(getByText(p.name)).not.toBeNull();
    }),
  );
});
