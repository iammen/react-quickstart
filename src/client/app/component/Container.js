import React from 'react';
import Navigator from './Navigator';

export default class Container extends React.Component {
    render () {
        return (
            <div>
                <Navigator />
                { this.props.children }
            </div>
        );
    }
}