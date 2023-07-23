import history from "./utils/history";
import { Router, Switch, Route } from "react-router-dom";
import urls from "./global/constants/UrlConstants";
import withClearCache from "./ClearCache";
import Box from "@mui/system/Box";

import PageNotFound from "./screens/PageNotFound/PageNotFound";
import Notifications from "./utils/notifications";
import LandingPage from "./screens/LandingPage/LandingPage";
import Layout from "./screens/Shared/Layout/Layout";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";

const App = () => {
  return <ClearCacheComponent />;
};

const MainApp = () => {
  return (
    <Box>
      <Router history={history}>
        <Layout />
        <Switch>
          <Route exact path={urls.landingViewPath} component={LandingPage} />
          <Route exact path={urls.loginViewPath} component={Login} />
          <Route exact path={urls.registerViewPath} component={Register} />
          <Route path={""} component={PageNotFound} />
        </Switch>
      </Router>
      <Notifications />
    </Box>
  );
};

const ClearCacheComponent = withClearCache(MainApp);

export default App;
