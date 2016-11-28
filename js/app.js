import 'babel-polyfill';

import {AppContainer} from 'react-hot-loader'

import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import applyRouterMiddleware from 'react-router/lib/applyRouterMiddleware';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import Route from 'react-router/lib/Route';
import useRelay from 'react-router-relay';

import App from './components/App';
import NonRelayWrapper from './components/NonRelayWrapper';
import ViewerQuery from './queries/ViewerQuery';

function render(CurrentApp) {
  ReactDOM.render(
    <AppContainer>
      <Router
        history={browserHistory}
        render={applyRouterMiddleware(useRelay)}
        environment={Relay.Store}
      >
        <Route
          path="/"
          component={NonRelayWrapper}
        >
          <Route
            path="home"
            component={App}
            queries={{
              viewer: () => Relay.QL`query { viewer }`,
              product: () => Relay.QL`query { product }`,
            }}
          />
        </Route>
      </Router>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(NewApp);
  });
}
