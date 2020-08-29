// import {sum as newSum} from './../sum';

// console.log('sum', newSum(5,6));

function hello(){
    console.log('hello from module!');
}

 function sum(a, b){
    console.log(a+b);
}

// export {sum};

 let mult = function(a, b){ return a*b; };

 const name = 'John';

export {sum, name, mult};

export default hello;
