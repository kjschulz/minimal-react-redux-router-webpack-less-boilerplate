import React from 'react';
import { Route, Switch } from 'react-router';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Hello from '../components/Hello';
import Counter from '../components/Counter';
import NoMatch from '../components/404';

const Layout = () => (
  <div className="app-wrapper">
    <header>
      <div className="container">
        <NavBar />
      </div>
    </header>
    <div className="content">
      <div className="container">
        <h1>Welcome</h1>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/counter" component={Counter} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
