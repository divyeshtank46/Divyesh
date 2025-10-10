// // function name1(firstName){
// //     console.log("your Name is ",firstName);
// // }
// // name1("divyesh");
// let name1 =(firstName)=>{
//     return firstName;
// }
// console.log(name1("divyesh"));
function checkage(age="151"){
    return age;
}
function hello(fname= checkage(),lname={name:"rahul",Age:15} ){
    console.log(fname ," " ,lname);
}
hello();