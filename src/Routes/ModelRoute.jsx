import { Switch, Route } from 'react-router-dom';
import Models from '../components/Models';
import Model from '../components/Model';
import NotFound from '../components/NotFound';

function ModelRoute() {
  return (
    <Switch>
      <Route exact path='/gadgets/laptops/:mark/' component={Models} />
      <Route path='/gadgets/laptops/:mark/:model' component={Model} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default ModelRoute;
