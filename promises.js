const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject('I have succeeded');
    }, 1000);
})

myPromise.then((value, error)=> {
    console.log(value, 'ajajajakaksk')
    // console.log(error);
}).catch((err)=>{
    console.log(err);
})