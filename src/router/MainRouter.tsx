import React from 'react';
// Routing
import {Route, Switch} from 'react-router-dom';
import Routes from '../constants/routes';

import ProductsList from '../pages/ProductsList';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

/**
 * Register each individual routes
 */
const MainRouter = () => (
  <Switch>
    <Route exact path={Routes.HOME} component={ProductsList} />
    <Route exact path={`${Routes.PRODUCTS}/:pid`} component={ProductDetails} />
    <Route exact path={Routes.CART} component={Cart} />
  </Switch>
);

export default MainRouter;
