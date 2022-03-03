let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 


// ESTRUCTURA ADECUADA SEGUN ES6+ PARA LAS PROMESAS Y LOS CALL BACKS A UNA API

const fetchData = (url_api) => {

    return new Promise ((resolve, reject) => {

        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if  (xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject (new Error ('Error ', url_api))
            }
        });
        xhttp.send();
    });
    
}

module.exports = fetchData;
