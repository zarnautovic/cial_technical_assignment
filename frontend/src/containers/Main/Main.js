import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '../../components/SearchItem/SearchItem';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import { storeResponse } from '../../store/actions/actions';

class App extends Component {

    searchTerm = (searchParam, searchWithPost) => {
      this.props.onSearch(searchParam, searchWithPost);
    }
  
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
          {this.props.error? <p>{this.props.error.message}</p> : ''}
          <Search
            search={this.searchTerm}
          />
          {searchItems}
          <Sidebar/>
        </div>
      );
    };
  }
  
  const mapStateToProps = state => {
    return {
      searchResult: state.search.searchResult,
      searchHistory: state.history.searchHistory,
      error: state.search.error
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onSearch: (searchParam, searchWithPost) => dispatch(storeResponse(searchParam, searchWithPost)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);