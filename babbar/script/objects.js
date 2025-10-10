let car = {
            carName: "Land Rover",
            model: "Range Rover",
            manufacturingYear: 2024,
            PurchaseYear: 2025,
            avlblColor: ["Red", "Green", "Black"],
            Price: 15000000,
        };
console.log(car);
let car2 = { ...car };
car.Price = 10000000;
console.log(car2);
