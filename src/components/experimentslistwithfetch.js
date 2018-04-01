import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

function ExperimentsListWithFetch(ComposedFilter, filterInfo) {
    class BaseFilter extends Component {
        componentDidMount() {
            this.props.fetchData();
        }
    
        render() {
            if (this.props.hasErrored) {
                return <p>Sorry! There was an error loading data</p>
            }
            if (this.props.isLoading) {
                return <p>Loading...</p>
            }
            return (
                <div>
                    <h2>{filterInfo.title}</h2>
                    
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Study Director</td>
                                <td>Start Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.items.map((item) => {
                                    if(!item.study_director){
                                        item.study_director = '---';
                                    }
                                    if(!item.start_date){
                                        item.start_date = '---';
                                    }
                                    return (
                                        <tr key={item.id}>
                                            <td> {item.id.toString()} </td>
                                            <td> {item.name.toString()} </td>
                                            <td> {item.study_director.toString()} </td>
                                            <td> {item.start_date.toString()} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>                
                </div>
            )
        }    
    }
    function mapStateToProps(state) {
        return {
            items: state.items,
            hasErrored: state.itemsHasErrored,
            isLoading: state.itemsIsLoading
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            fetchData: () => dispatch(itemsFetchData())
        };    
    }
    return connect(mapStateToProps, mapDispatchToProps)(BaseFilter);
}

export default ExperimentsListWithFetch;