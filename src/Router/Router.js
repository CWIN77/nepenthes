import {Route,Switch} from 'react-router-dom';
import Home from "./Home";
import Search from "./Search"
import Write from "./Write"
import Detail from './Detail'

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/write" component={Write} />
      <Route path="/bookmark" />
      <Route path="/profile" />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  );
}

export default Router;
