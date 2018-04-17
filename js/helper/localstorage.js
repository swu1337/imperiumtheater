let setStorage = (index, data) => {
    localStorage.setItem(index, JSON.stringify(data));
};
let  getStorage = (index) => {
    return JSON.parse(localStorage.getItem(index));
};
