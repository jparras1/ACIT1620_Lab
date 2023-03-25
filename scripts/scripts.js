// const courseList = [
//     {
//         code: "ACIT 1620", 
//         name: "Fundamental Web Technologies"
//     },
//     {
//         code: "ACIT 1630",
//         name: "Database Systems"
//     },
//     {
//         code: "ACIT 1420",
//         name: "Introduction to Systems Administration"
//     }
// ];

// let user_digits;
// let code_found = false;
// let invalid_input = false;

// do {
//     if (invalid_input === true) {
//         console.log("Invalid input")
//     };
//     user_digits = prompt("Please enter a valid 4-digit number: ");
//     invalid_input = true;
// } while (isNaN(user_digits) || user_digits.length < 4 || user_digits.length > 4);

// for (let course of courseList) {
//     if (course["code"].includes(user_digits)) {
//         console.log(`Yes I am taking the course: ${course["code"]} - ${course["name"]}`);
//         code_found = true;
//     };
// };
// if (code_found === false) {
//     courseList.push (
//         {
//             code: user_digits,
//             name: null
//         }
//     )
//     console.log("New course code added!");
// };
// console.log(courseList);

function createCourseArray() {
    // create an array to store the Course objects
    var myCourses = [];
    // search all elements in the course.html main section
    var courseList = document.querySelectorAll(".course-main-section > section");
    for (let item of courseList) {
        // check if the element has a course name and date information
        if (item.querySelector("a").getAttribute("title").includes("Course") && item.querySelector(".course-year").textContent !== null) {
            // store the course name and date in an object
            // then store the object to an array
            myCourses.push (
                {
                    code: item.querySelector("a").textContent,
                    date: item.querySelector(".course-year").textContent
                }
            );
        };
    };
    // return the array
    return myCourses
};

console.log(createCourseArray());
