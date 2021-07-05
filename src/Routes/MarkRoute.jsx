import { Switch, Route } from 'react-router-dom';
import Laptop from '../components/Laptop';
import ModelRoute from './ModelRoute';

function MarkRoute() {
  return (
    <Switch>
      <Route exact path='/gadgets/laptops' component={Laptop} />
      <Route path='/gadgets/laptops/:mark/' component={ModelRoute} />
    </Switch>
  );
}

export default MarkRoute;
