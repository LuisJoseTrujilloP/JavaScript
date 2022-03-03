const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            resolve ('Hey! ');
        } else {
            reject('Error! ');
        }
    });  
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch (err => console.error(err));