// // console.log(Math.min(12,12,2,3,2,3,4,4333,0.5));
// // console.log(Math.sqrt(25));

// obj={
//     name:"divyesh",
//     age:19,
//     height:181
// }
// let obj2={...obj};
// console.log("Og Object",obj);
// console.log("clone object",obj2);
let object = {
  name: "divyesh",
  age: 19,
};
let obj3={
    surname:"tank",
    address:"surat"
}
let object2 = Object.assign({}, object,obj3);
object.height = 154;
console.log("Og Object",object);
console.log("clone Object",object2); 
