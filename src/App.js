import React from 'react';
import Product from './components/Product';

function App() {

  return (
    <div >
    <Product 
    name="banabas" 
    price="1$" 
    description="Fresh bananas from Ecuador"
    />

    <Product 
    name="oranges" 
    price="2$" 
    description="Fresh oranges from Greece"
    />
    </div>
  );
}

export default App;
