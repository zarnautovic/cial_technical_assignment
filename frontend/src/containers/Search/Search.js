import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchInputChange } from '../../store/actions/actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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

    handleSubmit = (event) => {
        if(this.props.searchParam) {
            this.props.search(this.props.searchParam, this.state.searchWithPost);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="search">
                <div className="post-toggle">
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch
                                    value={this.state.searchWithPost}
                                    onChange={this.toggle}
                                    color="primary"
                                />
                            }
                            label="Search with post"
                        />
                    </FormGroup>
                </div>
                <br></br>
                <div className="search-bar">
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <TextField
                            id="search"
                            label="Search..."
                            fullWidth
                            value={this.props.searchParam}
                            onChange={this.inputChange}
                        />
                    </form>
                    <Button color="primary" onClick={this.search}>Search</Button>
                </div>
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