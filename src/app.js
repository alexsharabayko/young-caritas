import './theme/main.scss';

import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import { MainLayout } from './layout/main';
import { HomePage } from './pages/home';
import { ActionsPage } from './pages/actions';
import { AboutPage } from './pages/about';
import { LecturesPage } from './pages/lectures';

const APP_ELEMENT = document.querySelector('.app');

render((
  <Router history={hashHistory}>
    <Route path="" component={MainLayout}>
      <Route path="/" component={HomePage}></Route>
      <Route path="/actions" component={ActionsPage}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/lectures" component={LecturesPage}></Route>
    </Route>
  </Router>
), APP_ELEMENT);
