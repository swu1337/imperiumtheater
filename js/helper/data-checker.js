
//Check if the given array which contains input data from the user has empty values such as empty strings and empty value in array;
let checkInput = (array) => {
    return !array.includes('');
};

//Check if the given email already exist in de localStorage
let emailExist = (email) => {
    let users = getStorage('users').users;
    return users.find((user) => {
        return email === user.email;
    });
};
//Check if the given email and password is correct. We accomplish this by comparing the input from the user with the data from localStorage
let checkLogin = (email, password) => {
    let users = getStorage('users').users;

    // for(let user of users) {
    //     if(email == user.email && password == user.ww) {
    //         return user;
    //     }
    // }
    return users.find((user) => {
        return email === user.email && password === user.ww;
    });
    //return false;
};
