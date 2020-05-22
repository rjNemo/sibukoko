import React from 'react';
import {render} from '@testing-library/react';
import {ProductsListPage} from '.';
import {mockProducts} from '../../models/IProduct';

describe('Product list', () => {
  mockProducts.forEach(p =>
    it('displays products', () => {
      const {getByText} = render(<ProductsListPage products={mockProducts} />);
      expect(getByText(p.name)).not.toBeNull();
    }),
  );
});
