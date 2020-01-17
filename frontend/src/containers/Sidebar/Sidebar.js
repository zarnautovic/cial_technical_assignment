import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Sidebar.css';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import { storeResponse, searchInputChange, fetchHistory } from '../../store/actions/actions';


class Sidebar extends Component {

  componentDidMount() {
    this.props.onGetHistory()
  }

  inputChange = (searchParam) => {
    this.props.onHistorySearch(searchParam);
    this.props.onReplaceInput(searchParam);
  }

  render() {

    let previousSearches = null;

    if (this.props.searchHistory) {
      previousSearches = (
        <div>
          {this.props.searchHistory.map((previousSearch, index) => {
            return <HistoryItem
              historySearch={previousSearch}
              key={index}
              click={this.inputChange}
            />
          })}
        </div>
      );
    }

    return (
      <div className="sidebar">
        <h3>Previous searches:</h3>
        {previousSearches}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
      searchHistory: state.history.searchHistory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHistorySearch: (searchParam) => dispatch(storeResponse(searchParam)),
    onReplaceInput: (searchParam) => dispatch(searchInputChange(searchParam)),
    onGetHistory: () => dispatch(fetchHistory())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);