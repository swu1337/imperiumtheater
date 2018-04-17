let setStorage = (index, data) => {
    localStorage.setItem(index, JSON.stringify(data));
};
let getStorage = (index) => {
    return JSON.parse(localStorage.getItem(index));
};
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
