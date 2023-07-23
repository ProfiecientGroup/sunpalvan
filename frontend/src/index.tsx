import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./utils/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import ThemeProvider from "@mui/styles/ThemeProvider";
import { theme } from "./utils/styles";
import smoothscroll from "smoothscroll-polyfill";

// steps to override default smooth scrolling behaviour in browsers
declare global {
  interface Window {
    __forceSmoothScrollPolyfill__: boolean;
  }
}
window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
