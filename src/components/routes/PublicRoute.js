
import React from 'react';
import { Route } from 'react-router-dom';
// import { isLogin } from '../utils';
// Might add later

const PublicRoute = ({ component, path, exact }) => {
    return (
      exact ? <Route exact component={component} path={path} /> : <Route component={component} path={path} />
    );
};

export default PublicRoute;