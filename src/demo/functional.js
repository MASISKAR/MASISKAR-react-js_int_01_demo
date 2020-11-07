
// const array = [1,2,5,6,33,54,6,46,3];
// let k = 3;



// function filterNumbers(num, arr){
//     let newArray = [];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%num ===0){
//             newArray.push(arr[i]);
//         }
//     } 

//     return newArray;
// }

// function filterNumbers(num, arr){

//     //higher order function
//    return arr.filter((el)=> el%num === 0);
// }


// let result1 = filterNumbers(k, array);

// console.log('array', array);
// console.log('result1', result1);
// k = 4;


// const b = [5,9,8,5,46,1,34,8987,6,4];

// let result2 = filterNumbers(2, b);
// console.log('array', array);
// console.log('result2', result2);


// function sum(a){
//     let b = a+10;

//     return function(c){
//             let s = b +c;
//             return s;
//     };
// }

// let result = sum(5);

// console.log(result(20));

// console.log(sum(5)(20));


function decorator(fn){
    console.log('----function started----');
   return fn;
}

function sum(a, b){
    return a+b;
}




console.log(decorator(sum)(4,5));
console.log(decorator(sum)(4,5));

console.log(decorator((x, y)=>{
    return x*y;
})(10, 20));
