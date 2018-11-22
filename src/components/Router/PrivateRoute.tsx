import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuthorized } from '../../session';

const PrivateRoute: React.SFC<RouteProps> = ({ component, ...rest }) => {
  const Component = component!;

  return (
    <Route
      render={props => (!isAuthorized() ? <Redirect to={'/login'} /> : <Component {...props} />)}
      {...rest}
    />
  );
};

export default PrivateRoute;
