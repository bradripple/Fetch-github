// async function getRomeBellData () {
//     const response = await fetch('https://api.github.com/users/romebell');
//     console.log("response:", response);
//     const data = await response.json(); // {object}
//     console.log("data:", data);

//     // Two Ways to get data
//     // 1
//     let name = data.name; // {string}
//     console.log('name:', name);
//     let htmlUrl = data.html_url; // {string}
//     console.log('htmlUrl:', htmlUrl);

//     // 2
//     let { bio, following } = data;
//     console.log('bio:', bio); // {string}
//     console.log('following:', following); // {number}

// }

// // RUN 🏎 -> f 
// getRomeBellData();


// async function getRomeBell (item1, item2, item3, item4) {
//     const response = await fetch('https://api.github.com/users/romebell');
//     console.log("response:", response);
//     const data = await response.json(); // {object}
//     console.log("data:", data);

//     // Two Ways to get data
//     // 1
//     let data1 = data[item1]; // {string}
//     console.log(`${item1}:`, data1);
//     let data2 = data[item2]; // {string}
//     console.log(`${item2}:`, data2);
//     let data3 = data[item3]; // {string}
//     console.log(`${item3}:`, data3);
//     // console.log($`item2`, item2);

//     // 2
//     let { bio, following } = data;
//     // console.log('bio:', bio); // {string}
//     // console.log('following:', following); // {number}

// }

// // RUN 🏎 -> f 
// getRomeBell('name', 'bio', 'html_url');

/**
 * Set up
 * @todo - Make fetch-apis folder inside of codealongs
 * @todo - Create 3 files inside fetch-apis ( index.html style.css app.js )
 * @todo - Add skeleton for index.html
 * @todo - Link your css
 * @todo - Link your script
 * @todo - Open VS code to app.js
 * @todo - Make a README.md file
 * */

let githubUrl = 'https://api.github.com/users/';

/**
 * Template Literals
 * */


/**
 * Fetch
 * */

/**
 * Syntax - .then()
 * @function getRomeBellData
 * @return {object} - name, bio, following
 * */

let username = 'romebell';
let = romeUrl = `${githubUrl}${username}`; // {string} -> https://api.github.com/users/romebell
// console.log('romeUrl:', romeUrl); // endpoint

// Run 🏎 -> f
// getRomeBellData();
// console.log('age before line 159:', age);

function getRomeBellData() {
    fetch(romeUrl)
        .then(responseFromGithub => {
            console.log('responseFromGithub:', responseFromGithub);
            // check the status to make sure it's 200
            console.log('status:', responseFromGithub.status);
            if (responseFromGithub.status === 200) {
                return responseFromGithub.json(); // grab this and pass it to the next .then(data)
            } else {
                console.log('There is no data for this user!');
            }
        })
        .then(data => {
            console.log('data;', data); // {object}
            // console.log('name:', data.name); // Rome Bell -> {string}

            // Destructure name, bio, following
            let { name, bio, following } = data;
            console.log('name:', name);
            console.log('bio:', bio);
            console.log('following:', following);

            const result = { name, bio, following };
            // result.name = name;
            // result.bio = bio;
            // result.following = following;
            console.log('result:', result);

            return result;
        })
}

// Run 🏎 -> f
// getRomeBellData();

/**
 * @todo Make two function getBradRipple, getQmsparks
 * @todo Return 3 different items of data inside an object { name: '' }
 * */

// Run 🏎 -> f

// Run 🏎 -> f

/**
 * Function Expression
 * 
 * */

const getRobData = function() {
    let robUrl = `${githubUrl}rest2437`; // {string} // https://api.github.com/users/rest2437
    fetch(robUrl)
        .then(responseFromGithub => { // promise -> {object} : what is being returned from the previous call
            console.log('responseFromGithub:', responseFromGithub);
            // check the status to make sure it's 200
            console.log('status:', responseFromGithub.status);
            if (responseFromGithub.status === 200) {
                return responseFromGithub.json(); // {object} : grab this and pass it to the next .then(data)
            } else {
                console.log('There is no data for this user!');
            }
        })
        .then(data => { // promise -> {object} : data that is returned from responseFromGithub.json()
            console.log('data;', data); // {object}
            console.log('name:', data.name); // -> {string}

            // // Destructure name, bio, following
            let { name, html_url, public_repos } = data;
            console.log('name:', name);
            console.log('html_url:', html_url);
            console.log('public_repos:', public_repos);

            // const result = { name, bio, following };
            // // result.name = name;
            // // result.bio = bio;
            // // result.following = following;
            // console.log('result:', result);

            // return result;
        })
}

// getRobData();

const getBothDataSets = function() {
    console.log('inside get getBothDataSets');
    getRomeBellData();
    console.log('run getRomeBellData');
    getRobData();
    console.log('run getRobData');
}

// Run 🏎 -> f
// getBothDataSets();

/**
 * Syntax - async/await
 * */

async function getCalClemmerData() {
    const responseFromGithub = await fetch(`${githubUrl}CalClemmer`); // {object}
    console.log('cal response:', responseFromGithub);

    if (responseFromGithub.status === 200) {
        const data = await responseFromGithub.json(); // {object} - dot notation, bracket notation, destructuring
        // console.log('data constructor', data.constructor);
        console.log('data:', data);
        let { name, html_url, public_repos } = data;
        let results = {
            name,
            html_url,
            public_repos
        };
        console.log('results:', results);
        return results;
    } else {
        return { message: 'There was no data' }
    }

}
// Run 🏎 -> f
// getCalClemmerData();

const getNicholasTranData = async function() {
    const responseFromGithub = await fetch(`${githubUrl}siegfer`); // {object}
    console.log('nicholas response:', responseFromGithub);

    if (responseFromGithub.status === 200) {
        const data = await responseFromGithub.json(); // {object} - dot notation, bracket notation, destructuring
        // console.log('data constructor', data.constructor);
        console.log('data:', data);
        let { name, html_url, public_repos } = data;
        let results = {
            name,
            html_url,
            public_repos
        };
        console.log('results:', results);
        return results;
    } else {
        return { message: 'No data found' }
    }

}

// Run 🏎 -> f
// getNicholasTranData();

const getBothData = async function() {
        let x = await getCalClemmerData(); // {object} - name, html_url, public_repos
        console.log('x:', x);
        console.log('before y')
        let y = await getNicholasTranData(); // {object}
        console.log('after y')
        console.log('y:', y);
    }
    // Run 🏎 -> f
getBothData();

// When the javascript file is ran
// goes and finds all of the functions that declared

/**
  function helloWord() {
      console.log('Hello World');
  }
 * 
 * */

let name = 'Rome';
const array = [1, 2, 3];
var age = 33;
console.log('age:', age);