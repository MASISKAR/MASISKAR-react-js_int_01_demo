
const a = [1,2,35,5,65,47,8, 3, 7,6],
b = [7,9,65,65,2,12,1,3,16,6];

console.log('a', a);
console.log('b', b);

// const c = b.filter((el, i, arr)=>{
//     if(a.includes(el)){
//         return false;
//     }

//     return true;

// });

const commonElemets = [];

for(let el of a){
    if(b.includes(el)){
        commonElemets.push(el);
      }
}

const filterCommon = (el)=> !commonElemets.includes(el);

const newA = a.filter(filterCommon);
const newB = b.filter(filterCommon);

console.log('newA', newA);
console.log('newB', newB);
