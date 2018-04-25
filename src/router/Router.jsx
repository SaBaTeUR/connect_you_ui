import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Pages
import Home from '../containers/Home.jsx';
import PageNotFound from '../containers/PageNotFound.jsx';

// Router class
// Should define router path as constants
export default class Router extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={PageNotFound} />
        </Switch>  
      </BrowserRouter>
    );
  }
}