import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import ListItem from './ListItem/ListItem';
import Search from './Search/Search';
import Sidebar from './Sidebar/Sidebar';

class App extends Component {

  state = {
    searchResult: [],
    searchParam: '',
    searchHistory: []
  };

  searchData = () => {
    axios.get(`http://localhost:8080/search?searchParam=${this.state.searchParam}`)
      .then( response => {
        const sh = [...this.state.searchHistory];
        sh.push(this.state.searchParam);
        this.setState({ searchResult: response.data, searchHistory: sh });
    });
  };

  inputChange = (event) => {
    this.setState(Object.assign({}, this.state, { searchParam: event.target.value }));
  };

  render() {

    const searchItems = (
      <div>
      {this.state.searchResult.map((searchResult, index) => {
        return <ListItem
          url={searchResult.url} 
          title={searchResult.title}
          key={index}
        />
      })}
    </div>
  );

    return  (
      <div className="App">
        <h1> Cial technical assignement.</h1>
      <Search 
        click={this.searchData} 
        searchParam={this.state.searchParam}
        onInputChange={this.inputChange}
      />
      {searchItems}
      <Sidebar previousSearches={this.state.searchHistory}/>
    </div>
    );
  };
 }

export default App;
