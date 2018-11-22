import React from 'react';
import { Route, Router as ReactRouter, Switch } from 'react-router-dom';
import { history } from '../../history';
import LoginForm from '../LoginForm';
import NotFound from '../NotFound';
import Product from '../Product';
import Products from '../Products';
import Welcome from '../Welcome';
import GuestRoute from './GuestRoute';
import PrivateRoute from './PrivateRoute';

const Router: React.SFC = () => (
  <ReactRouter history={history}>
    <Switch>
      <GuestRoute exact path="/" component={Welcome} />
      <GuestRoute path="/login" component={LoginForm} />
      
      <PrivateRoute exact path="/products" component={Products} />
      <PrivateRoute path="/products/:accountId" component={Product} />
      <Route component={NotFound} />
    </Switch>
  </ReactRouter>
);

export default Router;
