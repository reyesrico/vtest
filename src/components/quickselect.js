import React, { Component } from 'react';

class QuickSelect extends Component {
    constructor(props) {
        super(props);
        this.getValues = this.getValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {filter: '-'};
    }

    getValues(name) {
        switch (name) {
            case 'phase':
                return [...new Set(this.props.data.map(item => item.phase))].sort();
            case 'group':
                return [...new Set(this.props.data.map(item => item.group))].sort();
            default:
                return [];
        }
    }

    handleChange(event) {
        this.setState({filter: event.target.value});
    }
    
    render() {
        return (
            <div>
                <h2>QuickSelect</h2>

                <form onSubmit={this.handleSubmit}>
                    <h3>phase</h3>
                    {
                        this.getValues('phase').map((val) => {
                            if(!val){
                                val = 'p---';
                            }                            
                            return (
                                <div key={val} >
                                    <label>
                                        <input type='checkbox' name={val} value={val} onChange={this.handleChange} />
                                        {val}
                                    </label>
                                </div>
                            );
                        })
                    }
                    <h3>group</h3>
                    {
                        this.getValues('group').map((val) => {
                            if(!val){
                                val = 'g---';
                            }
                            return (
                                <div key={val} >
                                    <label>
                                        <input type='checkbox' name={val} value={val} onChange={this.handleChange} />
                                        {val}
                                    </label>
                                </div>
                            );
                        })
                    }
                </form>
                <br />
                <h3>Table</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Display ID</td>
                            <td>Phase</td>
                            <td>Group</td>
                            <td>Strain</td>
                            <td>Sex</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map(function (row) {
                                var css = 'notSelected';
                                if(this.state.filter === row.phase || this.state.filter === row.group){
                                    css = 'selected';
                                }
                                return (
                                    <tr key={row.displayId} className={css}>
                                        <td>{row.displayId}</td>
                                        <td>{row.phase}</td>
                                        <td>{row.group}</td>
                                        <td>{row.strain}</td>
                                        <td>{row.sex}</td>
                                    </tr>)
                            }, this)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QuickSelect;