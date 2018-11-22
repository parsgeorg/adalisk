import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuthorized } from '../../session';

const GuestRoute: React.SFC<RouteProps> = ({ component, ...rest }) => {
  const Component = component!;

  return (
    <Route
      render={props => (isAuthorized() ? <Redirect to={'/products'} /> : <Component {...props} />)}
      {...rest}
    />
  );
};

export default GuestRoute;
