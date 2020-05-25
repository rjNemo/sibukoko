import React, {FC} from 'react';
import ProductsListPage from './pages/ProductsList';
import Navbar from './components/Navbar';

const App: FC = () => (
  <>
    <Navbar />
    <ProductsListPage />
  </>
);

export default App;
