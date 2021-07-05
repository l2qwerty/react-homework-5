import { Switch, Route } from 'react-router-dom';
import MarkRoute from './MarkRoute';
import NotFound from '../components/NotFound';
import Electronics from '../components/Electronics';

function ElectronicsRoute() {
  return (
    <Switch>
      <Route exact path='/gadgets' component={Electronics} />
      <Route path='/gadgets/laptops' component={MarkRoute} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default ElectronicsRoute;
