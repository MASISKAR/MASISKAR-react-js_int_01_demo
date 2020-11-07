import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/ToDo';
// import './demo/functional';
import FlexBox from './demo/HOC.js';

function App() {

  return ( 
    <div className='app'>
   <ToDo />

{/*    <Hoc test={'true'}>
    <h1>Heading</h1> 
    <p>Lorem ipsum dolor sit amet.</p>
   </Hoc>

<Hoc /> */}


<FlexBox>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <ToDo />
</FlexBox>

<div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>
  <div className="block"></div>

    </div>
  );
}

export default App;
