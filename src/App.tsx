import React, {FC} from 'react';
// Routing
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './router/MainRouter';

import Navbar from './components/Navbar';

const App: FC = () => (
  <BrowserRouter>
    <Navbar />
    <MainRouter />
  </BrowserRouter>
);

export default App;
