let githubUrl = 'https://api.github.com/users/';

const getUserData = async function(usernames) {
    const results = [];

    for (let i = 0; i < usernames.length; i++) {
        let user = usernames[i];
        console.log('user:', user);
        await fetch(`${githubUrl}${usernames[i]}`)
            .then(response => {
                console.log('response:', response);
                if (response.status === 200) {
                    return response.json();
                } else {
                    console.log('There is no user data');
                }
            })
            .then(data => {
                let { name, bio, id, url } = data;
                const object1 = { name, bio, id, url };
                results.push(object1);
            })

    }
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

const addNamesList = async() => {
    const engineerList = await getUserData(softwareEngineers);
    let uList = document.createElement('ul');
    uList.textContent = 'NAMES LIST';

    for (const key of engineerList) {

        if (key.name === null) {
            let listItem = document.createElement('li');
            listItem.textContent = 'No Name listed';
        } else {
            let { name } = key;
            let listItem = document.createElement('li');
            listItem.textContent = name;
            uList.appendChild(listItem);
        }
    }
    let bodyList = document.body.appendChild(uList);
}

// Run 🏎 -> f
addNamesList();

const addIdList = async() => {
    const engineerList = await getUserData(softwareEngineers);
    let uList = document.createElement('ul');
    uList.textContent = 'ID LIST';

    for (const key of engineerList) {

        if (key.id === null) {
            let { id } = person;
            let listItem = document.createElement('li');
            listItem.textContent = 'No ID listed';
            uList.appendChild(listItem);
        } else {
            let { id } = key;
            let listItem = document.createElement('li');
            listItem.textContent = id;
            uList.appendChild(listItem);
        }
    }
    let bodyList = document.body.appendChild(uList);
}

// Run 🏎 -> f
addIdList();

const addBioList = async() => {
    const engineerList = await getUserData(softwareEngineers);
    let uList = document.createElement('ul');
    uList.textContent = 'BIO LIST';

    for (const key of engineerList) {

        if (key.bio === null) {
            let listItem = document.createElement('li');
            listItem.textContent = 'No Bio listed';
            uList.appendChild(listItem);
        } else {
            let { bio } = key;
            let listItem = document.createElement('li');
            listItem.textContent = bio;
            uList.appendChild(listItem);
        }
    }
    let bodyList = document.body.appendChild(uList);
}

// Run 🏎 -> f
addBioList();


const addUrl = async() => {
    const engineerList = await getUserData(softwareEngineers);
    let uList = document.createElement('ul');
    uList.textContent = 'URL LIST';

    for (const key of engineerList) {

        if (key.url === null) {
            let listItem = document.createElement('li');
            listItem.textContent = 'No URL listed';
            uList.appendChild(listItem);
        } else {
            let { url } = key;
            let listItem = document.createElement('li');
            listItem.textContent = url;
            uList.appendChild(listItem);
        }

    }
    let bodyList = document.body.appendChild(uList);
}

addUrl();