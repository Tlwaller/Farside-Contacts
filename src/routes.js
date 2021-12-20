import { Switch, Route } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import ServiceQueue from './Components/Pages/ServiceQueue';
import ServiceInfo from './Components/Pages/ServiceInfo';

export default (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/queue" component={ServiceQueue}/>
            <Route path="/service" component={ServiceInfo}/>
        </Switch>
)