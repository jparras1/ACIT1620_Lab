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
let code_found = false;
let invalid_input = false;

do {
    if (invalid_input === true) {
        console.log("Invalid input")
    };
    user_digits = prompt("Please enter a valid 4-digit number: ");
    invalid_input = true;
} while (isNaN(user_digits) || user_digits.length < 4 || user_digits.length > 4);

for (let course of courseList) {
    if (course["code"].includes(user_digits)) {
        console.log(`Yes I am taking the course: ${course["code"]} - ${course["name"]}`);
        code_found = true;
    };
};
if (code_found === false) {
    courseList.push (
        {
            code: user_digits,
            name: null
        }
    )
    console.log("New course code added!");
};
console.log(courseList);

