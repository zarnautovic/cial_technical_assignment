import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchListItem from '../../components/SearchItem/SearchItem';
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
              return <SearchListItem
                url={searchResult.url}
                title={searchResult.title}
                key={index}
              />
            })}
          </div>
        );
      }
      return (
        <div className="app">
          <h1> Cial technical assignement.</h1>
          <div className="content-wrapper">
            <div className="main-content">
              <Search
                search={this.searchTerm}
              />
              {searchItems}
            </div>
            <Sidebar/>
          </div>
        </div>
      );
    };
  }
  
  const mapStateToProps = state => {
    return {
      searchResult: state.search.searchResult,
      searchHistory: state.history.searchHistory,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onSearch: (searchParam, searchWithPost) => dispatch(storeResponse(searchParam, searchWithPost)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);