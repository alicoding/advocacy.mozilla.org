import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/advocacy.mozilla.org/">
      <IndexRoute component={require('./pages/home.jsx')}/>
      <Route path="/open-web-fellows" component={require('./pages/open-web-fellows/overview.jsx')}/>
      <Route path="/open-web-fellows/fellows" component={require('./pages/open-web-fellows/fellows.jsx')}/>
      <Route path="/open-web-fellows/info" component={require('./pages/open-web-fellows/info.jsx')}/>
      <Route path="/encrypt" component={require('./pages/encrypt/default.jsx')}/>
      <Route path="/encrypt/v2" component={require('./pages/encrypt/v2.jsx')}/>
      <Route path="/encrypt/v3" component={require('./pages/encrypt/v3.jsx')}/>
    </Route>
  </Router>
), document.querySelector("#my-app"));
