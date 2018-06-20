import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage';
import RSVP from '../components/RSVP';
import NotFound from '../components/NotFound';
import ThankYou from '../components/ThankYou';
import AllResponses from '../components/AllResponses';
import OurStory from '../components/OurStory';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/rsvp" component={RSVP} />
        <Route path="/thankyou" component={ThankYou} />
        <Route path="/responses" component={AllResponses} />
        <Route path="/ourstory" component={OurStory} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
