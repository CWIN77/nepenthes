import {Route,Switch} from 'react-router-dom';
import Home from "./Home";
import Search from "./Search"
import Write from "./Write"
import Detail from './Detail'
import Profile from './Profile';
import Bookmark from './Bookmark';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/write" component={Write} />
      <Route path="/bookmark" component={Bookmark} />
      <Route path="/profile" component={Profile} />
      <Route path="/detail/:page/:id" component={Detail} />
    </Switch>
  );
}

export default Router;
