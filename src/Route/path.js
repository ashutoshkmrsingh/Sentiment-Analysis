import React, { Component } from "react";
import Home from '../Components/Home/home';
import Result from '../Components/Result/result';
import Error from '../Components/Error/error';
import { Switch, Route } from 'react-router-dom';

class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
            <Route path='/' component={ Home } exact/>
            <Route path='/result' component={ Result } exact/>
            <Route component={ Error } />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Router;
