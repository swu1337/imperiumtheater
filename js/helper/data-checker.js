let checkInput = (array) => {
    return !array.includes('');
}
let emailExist = (email) => {
    let users = getStorage('users').users;
    return users.find((user) => {
        return email === user.email;
    });
};