import { Route, Redirect, RouteProps } from "react-router-dom";
import urls from "../../constants/UrlConstants";

interface CustomProps extends RouteProps {
  component?: any;
  isLoggedIn: boolean;
}

const PrivateRoute = (props: CustomProps) => {
  const { component: Component, isLoggedIn, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isLoggedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: urls.landingViewPath,
              state: {
                from: routeProps.location,
                search: routeProps.location.search,
              },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
