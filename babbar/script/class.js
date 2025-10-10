class Human{
    height=131;
    weight=43;
    Name="divyesh";

    Walking(){
        console.log("man is walking");

    }
    Running(){
        console.log("man is running");
    }
}
let obj = new Human();
console.log(obj.Name);
console.log(obj.height);
obj.Running();
