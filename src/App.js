import React from "react";
import AppRouter from "./router/AppRouter";
import store, { history } from "./redux/store";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'
import NetworkDetector from './hoc/NetworkDetector';
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <AppRouter />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default NetworkDetector(App);
