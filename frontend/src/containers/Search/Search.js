import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchInputChange } from '../../store/actions/actions'

import './Search.css';

class Search extends Component {

    state = {
        searchWithPost: false
    }

    inputChange = (event) => {
        this.props.onInputChange(event.target.value)
    }

    toggle = () => {
        this.setState({ searchWithPost : !this.state.searchWithPost});
    };

    keyPress(event) {
        if (event.key === 'Enter') {
            this.props.search(this.props.searchParam)
        }
    }

    search = () => {
        if(this.props.searchParam) {
            this.props.search(this.props.searchParam, this.state.searchWithPost);
        }
    }

    render() {
        return (
            <div className="Search">
                <input 
                    type="checkbox"
                    value={this.state.searchWithPost}
                    onChange={this.toggle}
                /> Search with post
                <br></br>
                <input
                    value={this.props.searchParam}
                    onChange={this.inputChange}
                    onKeyPress={(event) => { this.keyPress(event) }}
                />
                <button onClick={this.search}>Search</button>
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