import React, { Component } from 'react';
import Loading from '../loadingSpinner/LoadingSpinner';

export default Cmp => {
    return class extends Component {
        render() {
            const { loading, ...passThroughProps} = this.props;

            if (loading) {
                return <Loading/>;
            }
            return <Cmp {...passThroughProps} />;
        }
    };

};