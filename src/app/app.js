import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { MainLayout } from './layout/main';
import { ActionsPage } from './pages/actions';
import { AboutPage } from './pages/about';

const APP_ELEMENT = document.querySelector('.app');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ActionsPage/>
        <AboutPage/>
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="" component={MainLayout}>
      <Route path="/" component={ActionsPage}></Route>
      <Route path="/about" component={AboutPage}></Route>
    </Route>
  </Router>
), APP_ELEMENT);
