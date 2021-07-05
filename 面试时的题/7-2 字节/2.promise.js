const sleep = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },time)
    })
}

sleep(3000).then(value => {
    console.log('hello world');
})