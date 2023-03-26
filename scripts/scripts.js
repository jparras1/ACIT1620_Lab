function createCourseArray() {
    // create an array to store the Course objects
    var courseList = [];
    // search all elements in the course.html main section
    var courseSections = document.querySelectorAll(".course-main-section > section");
    for (let item of courseSections) {
        // check if the element has a course name and date information
        if (item.querySelector("a").textContent.includes("ACIT") && item.querySelector(".course-year").textContent !== null) {
            // store the course name and date in an object
            // then push the object to an array
            courseList.push (
                {
                    code: item.querySelector("a").textContent,
                    date: item.querySelector(".course-year").textContent
                }
            );
        }
    }
    // return the array
    return courseList;
}

function findCourse(courseList) {
    var invalid_input = false;
    var course_found = false;
    var user_digits;
    // get a 4-digit number from the user
    // prompt the user again if invalid data is entered
    do {
        if (invalid_input === true) {
            alert("Invalid Input");
        }
        user_digits = prompt("Please enter a valid 4-digit number: ");
        invalid_input = true;
    } while (isNaN(user_digits) || user_digits.length < 4 || user_digits.length > 4);

    var courseMain = document.querySelector(".course-main-section")
    var courseSections = document.querySelectorAll(".course-main-section > section");
    // check if the array created contains the number provided by the user
    for (let item of courseList) {
        if (item["code"].includes(user_digits)) {
            // change the background of the section where the user code is found
            for (let myElement of courseSections) {
                if (myElement.textContent.includes(item["code"])) {
                    myElement.style.backgroundColor = "green";
                }
            }
            course_found = true;
        }
    }
    // add a new section if user codes was not found
    if (course_found === false) {
        // create a new course section
        let newCourse = document.createElement("section");
        // set the attribute 'course-item' to new section
        newCourse.setAttribute("class", "course-item");
        // add to course main
        courseMain.appendChild(newCourse);

        // create a new A_tag for the new course title
        let newCourseTitle = document.createElement("a");
        // set a title attribute to the new A_tag
        newCourseTitle.setAttribute("title", `${user_digits}`);
        // Enter the user code as a content of the new A_tag
        newCourseTitle.textContent = `ACIT ${user_digits}`;
        // add to the created new section
        newCourse.appendChild(newCourseTitle);

        // create a new P_tag for the new course date
        let newCourseDate = document.createElement("p");
        // set a class attribute to the new P_tag
        newCourseDate.setAttribute("class", "course-year");
        // enter the course date as a content of the new P_tag
        newCourseDate.textContent = "Fall 2020";
        // add to the created new section
        newCourse.appendChild(newCourseDate);

        // crate a new P_tag for the new course description
        let newCourseDesc = document.createElement("p");
        // enter a description as a content of the new P_tag
        newCourseDesc.textContent = "N/A";
        // add to the new created section
        newCourse.appendChild(newCourseDesc);

        alert("Course code not found.\nNew course Added!")
        console.log("New Course Added!")
    }
}

let myCourses = createCourseArray();
findCourse(myCourses);
console.log(myCourses);