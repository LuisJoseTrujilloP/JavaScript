function sum (num1, num2){
    return num1 + num2;
};

// se puede llamar de cualquier forma
function calc(num1, num2, callback){
    return callback(num1, num2);
};

console.log(calc(7, 2, sum));


function date(callback) {
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 3000)
} 

function printDate(dateNow)
{
    console.log(dateNow);
}
date(printDate);


// // // // // // // // RESULT \\ \\ \\ \\ \\ \\ \\ \\

// luis@luis-Aspire-A315-55G:~/JavaScriptAsynchronous$ npm run callback

// > javascriptasynchronous@1.0.0 callback
// > node src/callback/index.js

// 4
// luis@luis-Aspire-A315-55G:~/JavaScriptAsynchronous$ npm run callback

// > javascriptasynchronous@1.0.0 callback
// > node src/callback/index.js

// 4
// luis@luis-Aspire-A315-55G:~/JavaScriptAsynchronous$ npm run callback

// > javascriptasynchronous@1.0.0 callback
// > node src/callback/index.js

// 9
