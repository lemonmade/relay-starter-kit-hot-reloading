import 'babel-polyfill';

import {AppContainer} from 'react-hot-loader'

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import App from './components/App';
import AppHomeRoute from './routes/AppHomeRoute';

function render(CurrentApp) {
  ReactDOM.render(
    <AppContainer>
      <Relay.Renderer
        environment={Relay.Store}
        Container={App}
        queryConfig={new AppHomeRoute()}
      />
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
