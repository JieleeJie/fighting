function makeClosures(arr, fn) {
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(function(i){
            return fn(arr[i])
        })
    }
    return result
}

let arr=[1,2,3]
let fn = function (x) { 
	return x * x; 
}
console.log(makeClosures(arr,fn))