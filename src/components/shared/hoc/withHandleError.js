import React, { Component } from 'react';
import FetchError from '../fetchError/FetchError';

export default Cmp => {
    return class extends Component {
        render() {
            const { error, ...passThroughProps} = this.props;

            if (error) {
                return <FetchError/>;
            }
            return <Cmp {...passThroughProps} />;
        }
    };

};