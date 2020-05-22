import React, {FC} from 'react';
import ProductsListPage from './pages/ProductsList';
import {mockProducts} from './models/IProduct';

const App: FC = () => <ProductsListPage products={mockProducts} />;

export default App;
