import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BaseFilterWrapper from './experimentslistwithfetch';

class ExperimentsList2 extends Component {
 render() {
    return(
        <div>
            <h2>Experiments List HOC</h2>
        </div>
    )
 }
}

let filterInfo = {
 title: 'Experiments List HOC'
};

export default BaseFilterWrapper(ExperimentsList2, filterInfo);