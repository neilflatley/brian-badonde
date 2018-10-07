import React, { Component, Navigator } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import { fetchData } from './api/search';
import ResultsList from './components/ResultsList';
import Title from './components/Title';
import './App.css';

const defaultInputText = 'Search for a movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      search: false,
      searchData: []
    }
    //console.log(this.props);
  }
  updateSearch(e){
    var value = e.target.value;
    this.setState({ term: value });
    if (value === '') {
      this.setState({search: false})
    } else {
      fetchData(value)
        .then(searchData => this.setState({ search: true, searchData, value }));
    }
    this.props.history.push('/search/' + value);
  }
  focus(e) {
  }
  blur(e) {
  }
  render() {
    //console.log(this.state);
    let logoHeight = (this.state.search) ? '20px' : '100px';
    let headerDisplay = (this.state.search) ? 'none' : 'block';
    return (
      <div className={(this.state.search) ? '' : 'App'}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{height:logoHeight}} />
          <h1 className="App-title" style={{display:headerDisplay}}>Brian Badonde's Bovie Binder</h1>
          <input type="text" name="search" placeholder={defaultInputText} value={this.state.term}
              onFocus={this.focus.bind(this)} 
              onBlur={this.blur.bind(this)} 
              onChange={this.updateSearch.bind(this)}/>
        </header>
            <Switch>
              <Route path={'/search/:term'} render={(props) => {
                const term = props.match.params.term;
                console.log(this.state.term, term);
                if (!this.state.term && term) {
                  fetchData(term)
                  .then(searchData => this.setState({ search: true, searchData, term }));
                }
                return(
                  <ResultsList term={term} data={this.state} {...props}/>
                );
              }} />
              <Route path={'/title/:id'} render={(props) => {
                this.setState({ search: false });
                return(
                  <Title 
                    id={props.match.params.id} 
                    data={this.state.searchData.results.find(x => x.imdbID = props.match.params.id)} 
                    {...props}
                  />
                );
              }} />
            </Switch>
        
      </div>
    );
  }
}



export default withRouter(App);
