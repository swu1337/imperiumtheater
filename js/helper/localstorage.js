//This function is for setting data in to the localStorage, the only way to store multiple data is to use object and parse to JSON.
let setStorage = (index, data) => {
    localStorage.setItem(index, JSON.stringify(data));
};
//This function is for getting data from the localStorage and parse back to javascript object.
let getStorage = (index) => {
    return JSON.parse(localStorage.getItem(index));
};

//This function is hardcoded but makes it easier to convert data from an array to object so that we push it localStorage
let objectFormatter = (array) => {
    return {
        vn : array[0],
        tv : array[1],
        an : array[2],
        email : array[3],
        tn : array[4],
        ww: array[5]
    }
}
