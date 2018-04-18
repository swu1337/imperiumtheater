(function() {
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
