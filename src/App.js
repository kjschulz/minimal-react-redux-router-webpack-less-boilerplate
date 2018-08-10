import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import Layout from './components/Layout';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Layout />
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
