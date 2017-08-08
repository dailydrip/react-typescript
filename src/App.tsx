import * as React from 'react';
import './App.css';

type Circle = {
  radius: number;
};

type Person = {
  name: string;
  age: number;
};

const logo = require('./logo.svg');

class App extends React.Component<{}, {}> {
  render() {
    let circle: Circle = {radius: 3};
    let person1: Person = {name: 'Josh', age: 33};
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {circle.radius}
        <h3>
          {person1.name}
        </h3>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
