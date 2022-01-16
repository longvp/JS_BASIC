
// let obj = {
//     name : "Long",
//     age : 18,
//     get na(){
//         return this.name;
//     }
// };
// console.log(obj.na);

let Person = function (name, age) {
    this.name = name;
    this.age = age;
}

let p = new Person("Long", 18);

let numbers = [1, 2, 3];

Array.prototype.forEach2 = function (callback) {
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            callback(this[i], i, this);
        }
    }
}

Array.prototype.filter2 = function (callback) {
    let array = [];
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            let result = callback(this[i], i, this);
            if (result) {
                array.push(this[i]);
            }
        }
    }
    return array;
}

function f(value) {
    console.log(value);
}

Array.prototype.map2 = function (callback) {
    let arr = [];
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            let result = callback(this[i], i, this);
            arr.push(result);
        }
    }
    return arr;
}


// -----------------------------------  Promise  ----------------------------------------------------
// let promise = new Promise(
//     function(resolve, reject){
//         resolve(1);
//     }
// );

// promise
//     .then(function(number){
//         setTimeout(function(){console.log(number)},3000);
//     })
//     .then(function(data){
//         console.log(2);
//     })
//     .then(function(data){
//         console.log(3);
//     })
//     .catch(function(){

//     })
//     .finally(function(){
//         console.log("Done");
//     });

// ------------------------------------- PROMISE EXAMPLE --------------------------------------
let users = [
    {
        id: 1,
        name: "Kien Dam",
    },
    {
        id: 2,
        name: "Son Dang",
    },
    {
        id: 3,
        name: "Long VP",
    }
];

let comments = [
    {
        id: 1,
        user_id: 1,
        content: "Chua ra video :)",
    },
    {
        id: 2,
        user_id: 2,
        content: "Vua ra xong em ei",
    }
];

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    })
}

function getUserById(userIds) {
    return new Promise(function (resolve) {
        let resultUser = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(function () {
            resolve(resultUser);
        }, 1000);
    });
}

getComments()
    .then(function (comments) {
        let userIds = comments.map(function (comment) {
            return comment.user_id;
        });
        return getUserById(userIds)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function (data) {
        let html = "";
        let listBox = document.querySelector("#list-box");
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        listBox.innerHTML = html;
    })

// ------------------------------------------- FETCH ---------------------------------------------------------
let postAPI = "https://jsonplaceholder.typicode.com/posts";
fetch(postAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        let html = "";
        posts.forEach(function (post) {
            html += `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        })
        let listBox = document.querySelector("#list-box");
        listBox.innerHTML = html;
    })

    // ---------------------------- json-server ----------------------------------
    // let courseAPI = "http://localhost:3000/course";
    // fetch(courseAPI)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(courses){
    //         return courses;
    //     })


    //----------------------------- IIFE -----------------------------------------
    ; (function () {
        console.log("IIFE");
    })();

// ---------------------------- closure --------------------------------------

function createLog(typeLog) {
    function createMessage(message) {
        console.log(`[${typeLog}]: ${message}`);
    }
    return createMessage;
}

const log1 = createLog("Info");
log1("Log Info");

function manageCar() {
    const cars = [];
    return {
        add(car) {
            cars.push(car);
        },
        show() {
            console.log(cars);
        }
    };
}

const app = manageCar();
app.add("TOYOTA");
app.show();

// -------------------------- use strict -----------------------------------------

// -------------------------- bind -----------------------------------------------

// -------------------------- call -----------------------------------------------
