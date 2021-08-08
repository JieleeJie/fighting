// 看代码说输出。我以为一定不是2这么简单，从这开始我就懵了
// let p1 = Promise.resolve('ok');
// p1.then((value) => {
//     console.log(value);
//     return 2
// }).then((n) => {
//     console.log(n)
// });

/* 给定下列代码，封装一个获取img的宽高的promise 
const img = new Image();
img.onload = () => {
    // img.width 可以获取image的宽度， img.height可以获取image的高度
};
img.onerror = (err) => {
};
img.src = url;*/


// function getWH() {
//     return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.onload = () => {
//             // img.width 可以获取image的宽度， img.height可以获取image的高度
//             let imgObj = {}
//             imgObj.width = img.width
//             imgObj.height = img.height
//             resolve(imgObj)
//         };
//         img.onerror = (err) => {
//             reject(err)
//         };
//         img.src = url;
//     })
// }

// getWH().then(value => {
//     console.log(value);
// },reason => {
//     console.log(reason);
// })
