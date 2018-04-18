(function() {
    //Setting some default users for the systems using localStorage
    if(!localStorage.users) {
        setStorage('users', { users :
                                [{
                                    vn : "Steven",
                                    tv : "",
                                    an : "Wu",
                                    email : 'steven@steven.nl',
                                    tn : '0613212123',
                                    ww: 'test'
                                },
                                {
                                    vn : "Geert",
                                    tv : "",
                                    an : "Heemskerk",
                                    email : 'geert@geert.nl',
                                    tn : '0613212123',
                                    ww: 'test'
                                }
                                ]});
    }
})();
/*
    //IMPORTANT
    When logged in as an user the data of user is saved in localStorage. the data will be accessible on every pages on the browser.
    With this trick, u can keep de user logged in.
    When closing the browser all data will be lost, but since we have following code we add them back when launching the system.

    The current system is not done yet, you can't log out as an user. We advised test to everything first as a visitor instead of user.
    You can use localStorage.clear(); to clear data and you wil able to login back.
*/
