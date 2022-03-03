

// https://app.getpostman.com/join-team?invite_code=44bf0580417a1cfa506da82ff5eb237a   link de invitacion
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
let API = 'https://rickandmortyapi.com/api/character/';

// usar xmlhttprequiest

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event){
        // acer una validacion para saber si voy a generar mi call back
        if  (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
};

// Hacer la peticion, pedir informacion especifica 

fetchData(API, function (error1, data1) {
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimention);
        });

    });
});
 

// PROMESAS  algo va a suceder.

const promise1 = new Promise((resolve, reject) => reject("reject"))
