// // // // // // console.log("hello");
// // // // // // let array1=[1,2,'divyesh',false];
// // // // // // console.log(array1);
// // // // // // let array2 = new Array(25,'divyesh',24,true);
// // // // // // console.log(array2);
// // // // // // console.log(typeof(array1));
// // // // // // console.log(typeof(array2));
// // // // // // console.log(array1[2]);
// // // // // // array1.push('hello');
// // // // // // array1.push('hello');
// // // // // // array1.push('hello');
// // // // // // array1.pop();
// // // // // // array1.shift();
// // // // // // array1.unshift(1);

// // // // // // console.log(array1);
// // // // // // array1.slice(1,4);
// // // // // // console.log(array1.slice(1,4));
// // // // // // console.log(array1);
// // // // // // array1.splice(4,0,'tank');
// // // // // // console.log(array1);

// // // // // let array1=[20,23,19];
// // // // // array1.map((Number,index)=>{
// // // // //     console.log(Number+1);
// // // // //     console.log(index);
// // // // // })
// // // // let array1 =[1,2,3,6,5,8,5,'divyesh','tank','developer' ,true,false];
// // // // let ans=array1.filter((value)=>{
// // // //     if(typeof(value) == 'boolean'){
// // // //         return true

// // // //     }
// // // //     else{
// // // //         return false;

// // // //     }
// // // //     // if(Number%2 !== 0){

// // // //     //     return true;
// // // //     // }
// // // //     // else{
// // // //     //     false;

// // // //     // }
// // // //     // return Number%2 !== 0;
// // // // });
// // // // console.log(ans);
// // // let  obj ={
// // //     name:'divyesh',
// // //     age:19,
// // //     city:'surat',
// // //     address: function() {
// // //         console.log("go to classes");
// // //     }

// // // };
// // // obj.address();
// // // console.log(obj);
// // let obj = {
// //     Name : "Divyesh ",
// //     Age :25,
// //     City:"surat",

// // };
// // console.log(obj);
// // for(let key in obj){
// //     console.log(key,":",obj[key]);
// // }
// // let arr = [10, 20, 30, 40, 50, 60];
// // let getsum=(arr)=> {
// //     let sum=0;
// //     arr.forEach((value) => {
// //         sum = sum + value;
// //     });
// //     return sum;
// // }
// // let totalsum=getsum(arr);
// // console.log(totalsum);
// // let srr=[2,3,4,4,'divyesh'];
// // console.log(srr);
// // let arr= new Array("divyesh","Tank",19);
// // console.log(arr);
// // console.log(arr[0]);
// let names =["divyesh","vishal","kartik","rahul","Dipak","chirag","vishvas"];
// console.log(names);
// // console.log(names.unshift("sagar"));
// // console.log(names);
// // console.log(names.shift());
// // console.log(names);
// // console.log(names.slice(0,5));
// console.log(names.splice(1,0,'sagar'));
// console.log(names);
// console.log(names.splice(1,1));
// console.log(names)

let numbers=[10,20,30,40];
let sum=0;
numbers.map((number)=>{
    return sum+=number;
})
console.log(sum);