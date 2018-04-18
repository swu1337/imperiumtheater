//Routing for functions. It makes sure that certain function doesn 't overlap on other pages'
const HOME = 'imperiumtheater/index.html';
const ACCOUNT = 'imperiumtheater/html/account.html';
const CART = 'imperiumtheater/html/cart.html';
const CHECKOUT = 'imperiumtheater/html/checkout.html';
//A hacky way to get the current route, by removing the relative path of the user. and use imperiumtheater as root instead fixed document route.
//Routing is different for every user.
let getRoute = () => {
    return 'imperiumtheater' + window.location.href.split('imperiumtheater')[1];
}
