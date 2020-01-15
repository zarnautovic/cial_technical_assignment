import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import ListItem from './ListItem/ListItem';
import Search from './Search/Search';
import Sidebar from './Sidebar/Sidebar';
import { search } from './store/actions/actions';

class App extends Component {

  inputChange = (event) => {
    // this.setState(Object.assign({}, this.state, { searchParam: event.target.value }));
  };

  render() {
    let searchItems = null;
    if (this.props.searchResult) {
      searchItems = (
        <div>
          {this.props.searchResult.map((searchResult, index) => {
            return <ListItem
              url={searchResult.url}
              title={searchResult.title}
              key={index}
            />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1> Cial technical assignement.</h1>
        <Search
          click={this.props.onSearch} // click={this.searchData}
          searchParam={this.props.searchParam}
          onInputChange={this.inputChange}
        />
        {searchItems}
        <Sidebar previousSearches={this.props.searchHistory} />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    searchResult: state.searchResult,
    searchHistory: state.searchHistory,
    searchParam: state.searchParam
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: async () => dispatch(await search())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
