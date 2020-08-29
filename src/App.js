import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './demo/Name';
import Surname from './demo/Surname';


function Person(props){
let name = props.name;
let surname = props.surname;

  return (
    <div>
    <h1>Welcome!</h1>
    <Name name = {name}/>
    <Surname surname = {surname}/>
    </div>
  );
}



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

       {/*<Person />*/}

        <Person name = 'Jack' surname='Smith'/>
        <Person name = 'Sarah'/>

        <Name name = 'Harry'/>
        <Name name = 'Bob'/>

        <Surname />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
