import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from '../../components/SearchItem/SearchItem';
import Search from '../Search/Search';
import Sidebar from '../Sidebar/Sidebar';
import { storeResponse, saveSearchParam } from '../../store/actions/actions';

class App extends Component {

    searchTerm = (searchParam) => {
      this.props.onSearch(searchParam);
      this.props.onSaveSearchTerm(searchParam);
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
      searchHistory: state.history.searchHistory
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onSearch: (searchParam) => dispatch(storeResponse(searchParam)),
      onSaveSearchTerm: (searchParam) => dispatch(saveSearchParam(searchParam))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);