
// --------------------------- Arrow function ---------------------------------

const showMessage = (message) => {
    console.log(message);
};
showMessage("message");

const sum = (a, b) => a + b;
console.log(sum(2, 2));

const obj = (name, age) => ({ name: name, age: age });
console.log(obj("Long", 18));


// -------------------------- Classes -------------------------------------------

class Course {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}


// -------------------------- Default parameters values -----------------------------------

// function logger(mess, type = "log") {
//     console[type](mess);
// }

// logger("Message ... ", "warn");


// ------------------------- Enhanced object literals -------------------------------------

// - Định nghĩa key: value cho Object
// - Định nghĩa method cho Object
// - Định nghĩa key cho Object dưới dạng biến

let language = "Javascript";
let price = 1000;
let course = {
    language,
    price,
    getLanguage() {
        return this.language;
    }
};
console.log(course.getLanguage());


// -------------------------- Destructuring - Rest parameter ------------------------------------------------
/**
 * - Rest sử dụng kết hợp với Destructuring
 * - Là Rest khi định nghĩa tham số của hàm
 * - Là Spread khi truyền tham số vào hàm
 * 
 */
let array = ["Javascript", "PHP", "Ruby"];
let [a, ...rest1] = array;
console.log(a, rest1);

let object = {
    title: "JS",
    color: "red",
    children: {
        title: "title-children"
    }
}
let { title, ...rest2 } = object;
console.log(title, rest2);


// ------------------------- Spread -----------------------------------------------------

let array1 = ["Javascript", "PHP", "Ruby"];
let array2 = ["React", "Dark"];
let array3 = [...array2, ...array1];
console.log(array3);

let object1 = {
    height: "Cao",
};
let object2 = {
    width: "Dai",
};
let object3 = {
    ...object1,
    ...object2,
};
console.log(object3);


// ------------------------- Tagged template literal ------------------------------------

function highlight([first, ...strings], ...values) {
    let html = values.reduce(function (accumulator, currentValue) {
        return [...accumulator, `<span>${currentValue}</span>`, strings.shift()];
    }, [first]);
    console.log(html.join(" "));
}
let brand = "F8";
course = "Javascript";
highlight`Hoc lap trinh ${course} tai ${brand}!`;


// ------------------------- MODULES ---------------------------------------------------

import logger from './logger.js';

logger("Day la Message", "error");

// ------------------------- Optional changing ----------------------------------------