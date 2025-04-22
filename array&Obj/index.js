// array method

//push
// let array =[1,2,3,4,5];
// array.push(6);
// console.log(array);

//pop
// let array = [1,2,3,4,5];
// array.pop();
// console.log(array);

//unshift
// let array = [1,2,3,4,5,6];
// array.unshift(7);
// console.log(array);

//shift

// let array = [0,1,2,3,4,5];
// array.shift();
// console.log(array);

//slice

// let array = [0,1,2,3,4,5];
// let arr=array.slice(0,3);
// // console.log(arr);


//splice
// let array = [0,11,2,5,8,6];
// let arr = array.splice(1,3);
// console.log(arr);

// map
// let array = [0,11,2,5,8,6];
// array.map((val,index)=>{
//     console.log(val);
    
// })


//filter
// let array = [0,11,2,5,8,6];
// let arr = array.filter((val,index)=>{
// if(val % 2 == 0) return val;   
// })
// console.log(arr);


//spread operator
// let arr1=[2,3,4,5,6,7,8];
// let arr2=[6,7,5,33,4,5,6];

// let array=[...arr1,...arr2];
// console.log(array);

// merging

let obj1 = {
    1 : "a",
    2 : "b",
    3 : "c"
}
let obj2 = {
   4 : "a",
    5: "b",
    6: "c"

}
let obj= Object.assign(obj1, obj2);
console.log(obj);
