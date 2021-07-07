import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contacts from './Contacts';
import NotFound from './NotFound';
import ElectronicsRoute from '../routes/ElectronicsRoute';

function Routes() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/gadgets' component={ElectronicsRoute} />
        <Route path='*' component={NotFound} />
      </Switch>
    </main>
  );
}

export default Routes;
