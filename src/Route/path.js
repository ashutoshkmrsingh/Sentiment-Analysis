import React, { Component } from "react";
import Home from '../Components/Home/home';
import Result from '../Components/Result/result';
import { Switch, Route } from 'react-router-dom';

class Router extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
            <Route path='/' component={ Home } exact/>
            <Route path='/result' component={ Result } exact/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default Router;
