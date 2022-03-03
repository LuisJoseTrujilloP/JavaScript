const fetchData = require ('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';




fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch (err => console.error(err));










// fetchData(API)
//     .then(data => {
//         console.log(data.info.count);
//         return fetchData(`${API}${data.results[0].id}`)
//     })
//     .then(data => {
//         console.log(data.name)
//         return fetchData(data.origin.url)
//     })
//     .then(data => {
//         console.log(data.dimention)
//     })
//     .catch (err => console.error(err))
    
//     // ANTES DE ES6+
    
//     // function (error1, data1) {
//     // if(error1) return console.error(error1);
//     // fetchData(API + data1.results[0].id, function(error2, data2) {
//     //     if (error2) return console.error(error2);
//     //     fetchData(data2.origin.url, function (error3, data3) {
//     //         if(error3) return console.error(error3);
//     //         console.log(data1.info.count);
//     //         console.log(data2.name);
//     //         console.log(data3.dimention);
//     //     });

//     // });
// });





// const somethingWillHappen2 = () => {
//     return new Promise ((resolve, reject) => {
//         if (true){
//             resolve ('Hey! ');
//         } else {
//             reject('Error! ');
//         }
//     });  
// };

// somethingWillHappen2()
//     .then(response => console.log(response))
//     .catch (err => console.error(err));


// // //     let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 


// // // const fetchData = (url_api) => {

// // //     return new Promise ((resolve, reject) => {

// // //         const xhttp = new XMLHttpRequest();
// // //         xhttp.open('GET', url_api, true);
// // //         xhttp.onreadystatechange = function (event){

// // //             if  (xhttp.readyState === 4) {


// // //                            // ASI ERA ANTES

// // //                 // if (xhttp.status === 200) {
// // //                 //     callback(null, JSON.parse(xhttp.responseText));
// // //                 // } else {
// // //                 //     const error = new Error('Error ' + url_api);
// // //                 //     return callback(error, null)
// // //                 // }




// // //                                 // PERO LO RESUMIERON A ESTO EN ES6+

// // //                 if(xhttp.status === 200)
// // //                     ? resolve(JSON.parse(xhttp.responseText))
// // //                     : reject (new Error ('Error ', url_api))


                             
                 


// // //             }
// // //         }
// // //         xhttp.send();
// // //     });
    
// // // };