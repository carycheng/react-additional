import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import './components/card-list/card-list-component';
import { CardList } from './components/card-list/card-list-component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList />
        {this.state.monsters.map(monster => {
          <h1 key={monster.id}>{monster.name}</h1>
        })};
      </div>
    );
  }
}

export default App;
