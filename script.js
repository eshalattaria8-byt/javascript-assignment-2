// Question 1: Array of Five Numbers
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// Question 2:  Fruits
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]);
console.log(fruits[2]);

// Question 3:  using push()
let fruit = ["Apple", "Banana", "Orange"];
fruit.push("Mango");
console.log(fruit);

// Question 4: Find array Length
let number = [10, 20, 30, 40, 50];
console.log(number.length);

// Question 5: Hello  Function
function sayHello() {
    console.log("Hello World");
}
sayHello();

// Question 6: Sum of  Numbers
function add(a, b) {
    console.log(a + b);
}
add(10, 20);

// Question 7: Square of a Number
function findSquare(num) {
    return num * num;
}
console.log(findSquare(10));

// Question 8: Even or Odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkEvenOdd(9);

// Question 9: Largest  Numbers
function findLargest(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
findLargest(15, 25);

// Question 10: Welcome Message
function User(name) {
    console.log("Welcome " + name);
}
User("Eshal");

// Question 11: Student info
let Info = {
    name: "Eshal",
    age: 18,
    class: "First Year"
};
console.log(Info.name);
console.log(Info.age);
console.log(Info.class);

// Question 12: Car names
let car = {
    brand: "Toyota",
    model: "Corolla",
    color: "White"
};
console.log(car.brand);

// Question 13: Update Student Age
let student = {
    name: "Eshal",
    age: 17
};
student.age = 20;
console.log(student.age);

// Question 14: Student Object with Function
let studentData = {
    name: "Eshal",
    marks: 90
};
function print(student) {
    console.log(student.name);
    console.log(student.marks);
}
print(studentData);
