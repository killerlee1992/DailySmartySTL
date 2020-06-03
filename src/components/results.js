import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './SearchBar';
import ResultsPosts from './resultsPost';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {
    handleSearchBarSubmit(query){
        this.props.fetchPostWithQuery(query)
    }
    render() {
        return (
            <div>
                <Logo size={55}/>
               <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
                <ResultsPosts/>
            </div>
        )
    }
}
export default connect(null, actions)(Results);
