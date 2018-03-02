import React, { Component, Navigator } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Search from './api/search';
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
      //value: '',
      searchData: []
    }
  }
  yo(e){
    var value = e.target.value;
    console.log(value);
    this.setState({
      value
    });
    if (value == '') {
      this.setState({search: false})
    } else {
      Search.fetchData(this, value);
    }
  }
  focus(e) {
    if (e.target.value == defaultInputText) {
      this.setState({
        value: ''
      });
    }
  }
  blur(e) {
    if (e.target.value == '') {
      this.setState({
        value: undefined
      });
    }
  }
  render() {
    let logoHeight = (this.state.search) ? '20px' : '100px';
    let headerDisplay = (this.state.search) ? 'none' : 'block';
    let inputVal = (this.state.value != undefined || this.state.search) ? this.state.value : defaultInputText;
    return (
      <div className={(this.state.search) ? '' : 'App'}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{height:logoHeight}} />
          <h1 className="App-title" style={{display:headerDisplay}}>Brian Badonde's Bovie Binder</h1>
          <input type="text" name="search" value={inputVal} 
              onFocus={this.focus.bind(this)} 
              onBlur={this.blur.bind(this)} 
              onChange={this.yo.bind(this)}/>
        </header>
        <BrowserRouter>
            <Switch>
              <Route path={'/search'} render={(props) => {
                return(
                  <ResultsList data={this.state} {...props}/>
                );
              }} />
              <Route path={'/title/:id'} render={(props) => {
                return(
                  <Title 
                    id={props.match.params.id} 
                    data={this.state.searchData.results.find(x => x.imdbID = props.match.params.id)} 
                    {...props}
                  />
                );
              }} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
