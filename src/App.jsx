import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './routes';
import store from './store';
import history from './routes/history';

const App = () => (
  <Provider store={store}>
    <Routes>
      <ConnectedRouter history={history} />
    </Routes>
  </Provider>
);

export default App;
