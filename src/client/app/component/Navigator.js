import React from 'react';
import { Link } from 'react-router';

export default class Navigator extends React.Component {
    render () {
        return (
            <div>
                <h1>React Router Tutorials</h1>
                <Link activeClassName="active" to="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp; 
                <Link activeClassName="active" to="/address">Address</Link>
            </div>
        );
    }
}