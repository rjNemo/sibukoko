import React from 'react';
// Routing
import {Route, Switch} from 'react-router-dom';

import ProductsList from '../pages/ProductsList';
import ProductDetails from '../pages/ProductDetails';

/**
 * Register each individual routes
 */
const MainRouter = () => (
  <Switch>
    <Route exact path={'/'} component={ProductsList} />
    <Route exact path={'/detail'} component={ProductDetails} />
  </Switch>
);

export default MainRouter;
