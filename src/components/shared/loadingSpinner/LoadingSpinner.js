import React from 'react';
import ReactLoading from 'react-loading';

const LoadingSpinner = () => (
    <div className="async-status-wrapper">
        <ReactLoading type={'spin'} color={'black'} />
    </div>
);

export default LoadingSpinner;