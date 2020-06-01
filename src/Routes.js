import { Route, Switch,Router} from 'react-router-dom';
import React from 'react';
import history from './History';
import Homepage from './components/Homepage';
import App from './App';

class Routes extends React.Component{
render(){
    return(
        <Router history={history}>
                <Switch>
                    <Route  path="/" exact component={App} /> 
                    <Route path="/home"  component={Homepage} /> 
                </Switch>
        </Router>
    )
}
}
export default Routes;