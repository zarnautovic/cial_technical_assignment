import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchInputChange } from '../../store/actions/actions'

import './Search.css';

class Search extends Component {
    inputChange = (event) => {
        this.props.onInputChange(event.target.value)
    }

    render() {
        return (
            <div className="Search">
                <input
                    value={this.props.searchParam}
                    onChange={this.inputChange}></input>
                <button onClick={() => this.props.search(this.props.searchParam)}>Search</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        searchParam: state.search.searchParam
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (input) => dispatch(searchInputChange(input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);