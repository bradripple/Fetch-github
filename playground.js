// let githubUrl = 'https://api.github.com/users/';

// const getUserData = async function(usernames) {
//     const githubArray = [];

//     for (let i = 0; i < usernames.length; i++) {
//         // let user = usernames[i];
//         // console.log('user:', user);
//         fetch(`${githubUrl}${usernames[i]}`)
//             .then(response => {
//                 if (response.status === 200) {
//                     return response.json();
//                 } else {
//                     // console.log('There is no user data');
//                 }
//             })
//             .then(data => {
//                 let { name, login, id } = data;
//                 const object1 = { name, login, id };
//                 // console.log('object 1:', object1);
//                 githubArray.push(object1);
//             })

//     }
//     console.log('githubArray:', githubArray);
//     return githubArray;
// }



// const softwareEngineers = [
//     'kasaiavery3',
//     'romebell',
//     'CalClemmer',
//     'janejiunkim',
//     'SharleneImperial',
//     'bradripple',
//     'rest2437',
//     'qmsparks',
//     'siegfer'
// ];

// // Run 🏎 -> f
// getUserData(softwareEngineers);

// // const makeList = async() => { // defining an async function expressiond

// //     const engineerList = await getUserData(softwareEngineers); // invoking getUserData(softwareEngineers) and assigning it to variable

// //     let uList = document.createElement('ul'); // creating the ul element here


// //     // for... of.. is another way of doing forEach
// //     for (const person of engineerList) {
// //         console.log('person:', person); // person is each element in the array which are {objects}

// //         if (person.name === null) { // person.name to access key value pair of object and compare it to null
// //             let { id } = person; // destructuring person {ojbect} to access id value
// //             let listItem = document.createElement('li'); // creating a li item and assiging it to listItem
// //             listItem.appendChild(document.createTextNode(id)); // creating new text node with value of id  and appending to listItem
// //             uList.appendChild(listItem); // appending listItem to ulist (ul creating on line 418)
// //         } else { // conditional if name is not null
// //             let { name } = person; // desctructuring person {object} to access name value
// //             let listItem = document.createElement('li'); // creating a li item and assiging it to listItem
// //             listItem.appendChild(document.createTextNode(name)); // creating new text node with value of name and appending to listItem
// //             uList.appendChild(listItem); // appending listItem to uList (ul created on line 418)
// //         }
// //     }
// //     let bodyList = document.body.appendChild(uList); // appending uList to body of document
// // }
// // makeList(); // invoking the function makeList

// // const makeList = async() => {
// //     const engineerList = await getUserData(softwareEngineers);

// //     let uList = document.createElement('ul');

// //     for (const person of engineerList) {

// //         if (person.name === null) {
// //             let { id } = person;
// //             let listItem = document.createElement('li');
// //             listItem.appendChild(document.createTextNode(id));
// //             uList.appendChild(listItem);
// //         } else {
// //             let { name } = person;
// //             let listItem = document.createElement('li');
// //             listItem.appendChild(document.createTextNode(name));
// //             uList.appendChild(listItem);
// //         }
// //     }
// //     let bodyList = document.body.appendChild(uList);
// // }

// // makeList();

// const makeList = async() => {
//     const engineerList = await getUserData(softwareEngineers);
//     let uList = document.createElement('ul');
//     console.log('engineerList:', engineerList);

//     for (const person of engineerList) {

//         if (person.name === null) {
//             let { id } = person;
//             let listItem = document.createElement('li');
//             listItem.appendChild(document.createTextNode(id));
//             uList.appendChild(listItem);
//         } else {
//             let { name } = person;
//             let listItem = document.createElement('li');
//             listItem.appendChild(document.createTextNode(name));
//             uList.appendChild(listItem);
//         }
//     }
//     let bodyList = document.body.appendChild(uList);
//     console.log('bodyList', bodyL)
// }

// makeList();