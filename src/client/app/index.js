import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Container from './component/Container';
import Home from './component/Home';
import Address from './component/Address';
import NotFound from './component/NotFound';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Container}>
            <IndexRoute component={Home} />
            <Route path="/address" component={Address} />
        </Route>
        <Route path="*" component={NotFound} />        
    </Router>
), document.getElementById('root'));