const doSomthingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve ('Do something async!'), 1000)
            : reject(new Error ('Test Error'))
    });
}

const doSomthing = async () => {
    const something = await doSomthingAsync()
    console.log(something);
}

console.log ('Before');
doSomthing();
console.log ('After');


const anotherFunction = async () => {
    try {
        const something = await doSomthingAsync();
        console.log(something);
    } catch {
        console.error(error)
    }
}

console.log ('Before/');
anotherFunction();
console.log ('After/');