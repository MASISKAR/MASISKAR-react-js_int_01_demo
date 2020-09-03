import React from 'react';
import './App.css';
import Counter from './demo/Counter';

// import Name from './demo/Name';
// import Surname from './demo/Surname';
// import User from './demo/User';

// function Person(props){
// let name = props.name;
// let surname = props.surname;

//   return (
//     <div>
//     <h1>Welcome!</h1>
//     <Name name = {name}/>
//     <Surname surname = {surname}/>
//     </div>
//   );
// }



function App() {

  return (
    <div >
      <header >
        <Counter />

        {/* <User name='John' surname='Smith'/> */}


        {/*<Person />*/}

        {/*         <Person name = 'Jack' surname='Smith'/>
        <Person name = 'Sarah'/>

        <Name name = 'Harry'/>
        <Name name = 'Bob'/>

        <Surname /> */}

      </header>
    </div>
  );
}

export default App;
