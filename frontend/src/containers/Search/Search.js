import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchInputChange, toggleChange } from '../../store/actions/actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './Search.css';

class Search extends Component {

    inputChange = (event) => {
        this.props.onInputChange(event.target.value);
    }

    toggle = () => {
        this.props.onToggleChange();
    }

    keyPress(event) {
        if (event.key === 'Enter') {
            this.props.search(this.props.searchParam)
        }
    }

    search = () => {
        if(this.props.searchParam) {
            this.props.search(this.props.searchParam, this.props.searchWithPost);
        }
    }

    handleSubmit = (event) => {
        if(this.props.searchParam) {
            this.props.search(this.props.searchParam, this.props.searchWithPost);
        }
        event.preventDefault();
    }

    render() {
        let textField = (
            <TextField
                    id="search"
                    label="Search..."
                    fullWidth
                    value={this.props.searchParam}
                    onChange={this.inputChange}
                />
        );
        if (Object.keys(this.props.error).length != 0) {
            textField = (
                <TextField
                    error
                    id="standard-error-helper-text"
                    label="Search..."
                    helperText={this.props.error.message}
                    fullWidth
                    value={this.props.searchParam}
                    onChange={this.inputChange}
                />
            );
        }
        return (
            <div className="search">
                <div className="post-toggle">
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch
                                    value={this.props.searchWithPost}
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
                        {textField}
                    </form>
                    <Button color="primary" onClick={this.search}>Search</Button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        searchParam: state.search.searchParam,
        searchWithPost: state.search.searchWithPost,
        error: state.search.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (input) => dispatch(searchInputChange(input)),
        onToggleChange: () => dispatch(toggleChange())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);