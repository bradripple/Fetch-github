/**
 * Set up
 * @todo - Make fetch-apis folder inside of codealongs
 * @todo - Create 3 files inside fetch-apis ( index.html style.css app.js)
 * @todo - Add skeleton for index.html
 * @todo - Link your CSS
 * @todo - Link your script
 * @todo - Open VS code to app.js
 * @todo - Make a README.md file
 */

let githubUrl = 'https://api.github.com/users/';

/**
 *  Template literals
 * doesn't accept arrays of objects
 * only accepts strings and numbers
 * `${}`
 */

let username = 'romebell';
let romeUrl = `${githubUrl}${username}`; // {sting} -> https://api.github.com/users/romebell
console.log('romeUrl:', romeUrl); // endpoint

/**
 * Fetch
 * built in javaScript function for the browser
 */

/**
 * Syntax - .then()
 * 
 * @function getRomeBellData
 * @return {object} - name, bio, following
 * 
 * 200 = successful
 * 404 = not found
 */

function getRomeBellData() {
    fetch(romeUrl) // endpoint *required
        .then(responseFromGithub => { // promise -> {object} what is being returned from the previous call
            console.log('responseFromGithub:', responseFromGithub);
            // check the status to make sure it's 200 = successful
            console.log('status:', responseFromGithub.status)
            if (responseFromGithub.status === 200) {
                return responseFromGithub.json(); // {object} grab this and pass it to the next .then(variable) statement
            } else {
                console.log('There is no data for this user');
            }
        })
        .then(data => { // promise {object} : data that is returned from responseFromGithub.json()
            console.log('data:', data); // {object}
            console.log('name:', data.name); // Rome Bell -> {string}
            // Descturcturing bio
            // let { bio } = data;
            // console.log('bio: ', bio);
            // Destructuring following
            // let { following } = data;
            // console.log('following:', following);

            // Destructure name, bio, following
            let { following, name, bio } = data;
            console.log('following:', following);
            console.log('bio:', bio);
            console.log('name:', name);

            const result = { name, bio, following };
            // result.name = name;
            // result.bio = bio;
            // result.following = following;
            console.log('result:', result);

            return result;
        })
}

// Run 🍺 -> f
getRomeBellData();

/**
 * @todo Make two function getBradRipple, getCalClemmer
 * @todo Return 3 different items of data inside an object { name: ''}
 */

let userBrad = "bradripple";
let bradUrl = `${githubUrl}${userBrad}`;

function getBradRippleData() {
    fetch(bradUrl)
        .then(response => {
            console.log('response;', response);
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('There is no data for this user');
            }
        })
        .then(data => {
            let { name, type, public_repos } = data;
            const result = {};
            result.name = name;
            result.type = type;
            result.public_repos = public_repos;

            console.log('result:', result);

            return result;

        })
}



// Run 🍺 -> f
getBradRippleData();

let userCal = "CalClemmer";
let calUrl = `${githubUrl}${userCal}`;

function getCalClemmerData() {
    fetch(calUrl)
        .then(response => {
            console.log('response:', response);
            if (response.status == 200) {
                return response.json();
            } else {
                console.log('There is no data for this user');
            }
        })
        .then(data => {
            let { name, type, public_repos } = data;
            const result = {};
            result.name = name;
            result.type = type;
            result.public_repos = public_repos;

            console.log('results:', result);

            return result;
        })
}
// Run 🍺 -> f
getCalClemmerData();

// const getBothDataSets = function() {
//     console.log('inside getBothDataSets:')
//     getCalClemmerData();
//     getBradRippleData();
// }

// getBothDataSets();
/**
 * Function Expression
 * 
 */

/**
 * Syntax - async/await
 *  await must be used in an async function
 */
async function getCalClemmerData() {
    const responseFromGitHub = await fetch(`${githubUrl}CalClemmer`);
    console.log('cal response:', responseFromGitHub);

    if (responseFromGitHub === 200) {
        const data = await responseFromGitHub.json(); // {object} - dot notation, bracket notation, destructuring
        console.log('data:', data);
        let { name, html_url, public_repos } = data;
        let results = { name, html_url, public_repos };
        // let results = {
        //     name,
        //     html_url,
        //     public_repos
        console.log('results:', results);
        return results;
    };
}


// getCalClemmerData();

const getNicholasTranData = async function() {
    const responseFromGitHub = await fetch(`${githubUrl}siegfer`);
    console.log('nicholas response:', responseFromGitHub.status);

    if (responseFromGitHub === 200) {
        const data = await responseFromGitHub.json(); // {object} - dot notation, bracket notation, destructuring
        console.log('data:', data);
        let { name, html_url, public_repos } = data;
        const results = { name, html_url, public_repos };
        // let results = {
        //     name,
        //     html_url,
        //     public_repos
        console.log('results:', results);
        return results;
    };

}

getNicholasTranData();

// const getBothDataSets = async function() {
//     let x = await getCalClemmerData();
//     console.log('x:', x);
//     console.log('after x:', x);
//     let y = await getNicholasTranData();
//     console.log('y:', y);
//     console.log('after y:', y);

// }


//  bradripple done
// qmsparks done
//  romebell done
//  siegfer done
// rest2437 done
// CalClemmer done
// janejiunkim done
// SharleneImperial done
// kasaiavery3 done


// let userQuin = 'qmsparks';


const getJanesData = async function() {
    const responseFromGithub = await fetch(`${githubUrl}janejiunkim`);
    console.log('janes response:', responseFromGithub.status);

    if (responseFromGithub.status === 200) {
        const data = await responseFromGithub.json();
        let { name, html_url, public_repos } = data;
        const results = { name, html_url, public_repos };
        console.log('results:', results);
        return results;
    } else {
        console.log('There is no user data');
    }
}

getJanesData();

// const userSharlene = 'SharleneImperial';

async function getSharlenesData() {
    const responseFromGitHub = await fetch(`${githubUrl}SharleneImperial`);
    console.log('sharlenes response:', responseFromGitHub.status);

    if (responseFromGitHub.status === 200) {
        const data = await responseFromGitHub.json();
        let { name, html_url, public_repos } = data;
        const results = { name, html_url, public_repos };
        console.log('results:', results);
        return results;
    } else {
        console.log('There is no user data');
    }
}

getSharlenesData();

function getKasaisData() {
    fetch(`${githubUrl}kasaiavery3`)
        .then(response => {
            console.log('response;', response);
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('There is no data for this user');
            }
        })
        .then(data => {
            let { name, type, public_repos } = data;
            const result = {};
            result.name = name;
            result.type = type;
            result.public_repos = public_repos;

            console.log('result:', result);

            return result;

        })
}

getKasaisData();

function getRobsData() {
    fetch(`${githubUrl}rest2437`)
        .then(response => {
            console.log('response;', response);
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('There is no data for this user');
            }
        })
        .then(data => {
            let { name, type, public_repos } = data;
            const result = {};
            result.name = name;
            result.type = type;
            result.public_repos = public_repos;

            console.log('result:', result);

            return result;

        })
}

getRobsData();

// function getQuinsData() {
//     fetch(`${githubUrl}qmsparks`)
//         .then(response => {
//             console.log('response;', response);
//             if (response.status === 200) {
//                 return response.json();
//             } else {
//                 console.log('There is no data for this user');
//             }
//         })
//         .then(data => {
//             let { name, type, public_repos } = data;
//             const result = {};
//             result.name = name;
//             result.type = type;
//             result.public_repos = public_repos;

//             console.log('result:', result);

//             return result;

//         })
// }

// getQuinsData();

function getQuinsData() {
    fetch(`${githubUrl}qmsparks`)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log('There is no data for this user');
            }
        })
        .then(data => {
            let { name, type, public_repos } = data;
            const results = { name, type, public_repos };
            console.log('results:', results);
            return results;
        })
}

getQuinsData();

/**
 * Write a function getUserData(usernames) that takes in an array 
 * of strings ( Github usernames ) and return an array of objects that has { login, name, id }
 * which comes back as data from Github
 * @link https://api.github.com/users/
 * @function getUserData
 * @param usernames - {string}
 * @return {array[ojbect]} object includes login, name, id
 */


const getUserData = async function(usernames) {
    const results = [];

    for (let i = 0; i < usernames.length; i++) {
        // let user = usernames[i];
        // console.log('user:', user);
        await fetch(`${githubUrl}${usernames[i]}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.log('There is no user data');
                }
            })
            .then(data => {
                let { name, login, id } = data;
                const object1 = { name, login, id };
                console.log('object 1:', object1);
                results.push(object1);
            })

    }
    console.log('results:', results);
    return results;
}

const softwareEngineers = [
    'kasaiavery3',
    'romebell',
    'CalClemmer',
    'janejiunkim',
    'SharleneImperial',
    'bradripple',
    'rest2437',
    'qmsparks',
    'siegfer'
];

// Run 🏎 -> f
getUserData(softwareEngineers);

const addList = async() => {
    const engineerList = await getUserData(softwareEngineers);
    let uList = document.createElement('ul');

    for (const person of engineerList) {
        console.log('person:', person);

        if (person.name === null) {
            let { id } = person;
            let listItem = document.createElement('li');
            listItem.textContent;
            uList.appendChild(listItem);
        } else {
            let { name } = person;
            let listItem = document.createElement('li');
            listItem.textContent = name;
            uList.appendChild(listItem);
        }
    }
    let bodyList = document.body.appendChild(uList);
}
addList();