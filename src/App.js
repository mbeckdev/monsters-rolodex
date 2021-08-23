import React from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // monsters: [
      //   { name: 'Frankenstein', id: 'asdf' },
      //   {
      //     name: 'Dracula',
      //     id: 'asdf2',
      //   },
      //   { name: 'Zombie', id: 'asdf3' },
      // ],
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const serachField = this.state.searchField;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
        {/* <CardList monsters={this.state.monsters}></CardList> */}
        {/* <CardList name="Yihua" /> */}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
