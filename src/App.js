import React from 'react';
import Product from './components/Product';
import Input from './components/Input';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div >
    <Input />
   
<h1 className='heading'>Hello !!!!!!!!!!</h1>

<p className='price'>This is for test</p>


<p style={{
color: 'red',
fontSize: '20px',
backgroundColor: 'black'
}}>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, repellendus?</p>

     <Product 
    name="banabas" 
    price="1$" 
    description="Fresh bananas from Ecuador"
    />
    {
      /*
    <Product 
    name="oranges" 
    price="2$" 
    description="Fresh oranges from Greece"
    /> */
}
    </div>
  );
}

export default App;
