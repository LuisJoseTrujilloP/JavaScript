// https://app.getpostman.com/join-team?invite_code=44bf0580417a1cfa506da82ff5eb237a   link de invitacion
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// usar xmlhttprequiest

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event){
        // acer una validacion para saber si voy a generar mi call back
        if  (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

