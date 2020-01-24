import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routesConfig";

const renderRoutes = routes => {
  let routeList = [];

  routes.forEach(({ component: Component, path, childRoutes, ...rest }) => {
    routeList.push(
      <Route
        exact
        key={path}
        path={path}
        render={props => {
          const combinedProps = { ...rest, ...props };
          return <Component {...combinedProps} />;
        }}
        {...rest}
      />
    );
    if (childRoutes && childRoutes.length > 0) {
      routeList = routeList.concat(this.renderRoutes(childRoutes));
    }
  });
  return routeList;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>{renderRoutes(routes)}</Switch>
    </BrowserRouter>
  );
};

export default Router;
