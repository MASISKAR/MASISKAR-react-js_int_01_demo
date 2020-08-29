import React from 'react';

// function Surname(props){
//     return (
//       <p>My surname is {props.surname}!</p>
//     );
//   }

// const Surname = function(props){
//     return (
//       <p>My surname is {props.surname}!</p>
//     );
//   };

// const sum = function(a, b){
//     return a+b;
// };

// const sum = (a, b)=> a+b;

// const hello = name => 'Hello '+name;

// console.log(hello('Bill'));
// console.log(sum(4,5));

// let arr = [1,5,6,8,9,6,3,8];

// let newArr = arr.map( el => el*2);

// console.log('newArr', newArr);


// let user = {
//     name: 'John',
//     surname: 'Smith',
//     // getFullName: getName
// };

// function getName(age, b){
//     return this.name + ' '+this.surname + ' '+ age;
// }

// console.log(user.getFullName());

//call, apply, bind
// console.log(getName.call(user, 25 , 6));

// console.log(getName.apply(user, [25 , 6]));

// let newFunc = getName.bind(user, 28);

// console.log(newFunc());
// console.log(newFunc(56));

let user = {
    name: 'John',
    surname: 'Smith',
    getFullName: function () {
        console.log('this of getFullName', this);

        // const getName = function(){
        //     console.log('this of getName', this);
        //     return this.name;
        // }

        const getName = () => {
            console.log('this of getName', this);
            return this.name;
        };

        // return getName.call(this) + ' '+this.surname;
        return getName() + ' ' + this.surname;

    }
};

class User {
    constructor(name) {
        this.name = name;
    }

}

new User();

console.log(user.getFullName());






const Surname = (props) => {
    return (
        <p>My surname is {props.surname}!</p>
    );
};

export default Surname;