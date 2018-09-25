import React, { Component } from 'react';

import App from './App';
import PageNotFound from './PageNotFound';
import About from './About';


class Router extends Component {
    render() {
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About} />
        <Route component={PageNotFound}/>

        </Switch>
        </BrowserRouter>


    }
}