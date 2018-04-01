import { React, Component } from 'react';
import ExperimentsListWithFetch from './experimentslistwithfetch';

class ExperimentsList2 extends Component {
    render() {
        return <div>Nothing to display</div>;        
    }
}

let filterInfo = {
    title: 'Experiments List HOC'
};

export default ExperimentsListWithFetch(ExperimentsList2, filterInfo);