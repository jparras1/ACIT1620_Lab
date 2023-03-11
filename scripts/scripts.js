const courseList = [
    {
        code: "ACIT 1620", 
        name: "Fundamental Web Technologies"
    },
    {
        code: "ACIT 1630",
        name: "Database Systems"
    },
    {
        code: "ACIT 1420",
        name: "Introduction to Systems Administration"
    }
];

let user_digits;

do {
    user_digits = prompt("Enter a 4-digit number: ");
} while (isNaN(user_digits) || user_digits.length < 4);

console.log("hello");