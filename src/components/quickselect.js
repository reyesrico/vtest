import React, { Component } from 'react';
import { generateSampleSubjects } from '../services/subject';

class QuickSelect extends Component {
    constructor(props) {
        super(props);
        this.getValues = this.getValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            filter: [],
            data: generateSampleSubjects()
        };
    }

    getValues(name) {
        switch (name) {
            case 'phase':
                return [...new Set(this.state.data.map(item => item.phase))].sort();
            case 'group':
                return [...new Set(this.state.data.map(item => item.group))].sort();
            default:
                return [];
        }
    }

    handleChange(event) {
        var array = this.state.filter;
        if (event.target.checked) {
            array.push(event.target.value);
        }
        else if (!event.target.checked) {
            const index = array.indexOf(event.target.value);
            array.splice(index, 1);
        }
        this.setState({ filter: array });
    }

    render() {
        return (
            <div>
                <h2>QuickSelect</h2>

                <form onSubmit={this.handleSubmit}>
                    <h3>phase</h3>
                    {
                        this.getValues('phase').map((val) => {
                            if (val) {
                                return (
                                    <div key={val} >
                                        <label>
                                            <input type='checkbox' name={val} value={val} onChange={this.handleChange} />
                                            {val}
                                        </label>
                                    </div>
                                );
                            }
                            return null;                        
                        })
                    }
                    <h3>group</h3>
                    {
                        this.getValues('group').map((val) => {
                            if (val) {
                                return (
                                    <div key={val} >
                                        <label>
                                            <input type='checkbox' name={val} value={val} onChange={this.handleChange} />
                                            {val}
                                        </label>
                                    </div>
                                );
                            }
                            return null;
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
                            this.state.data.map(function (row) {
                                var css = 'notSelected';
                                if (this.state.filter.includes(row.phase) || this.state.filter.includes(row.group)) {
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