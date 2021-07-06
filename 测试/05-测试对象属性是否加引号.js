// let key = ''
let key = 'k1'
// let key = 'k2'

let obj={
    [key]:'value'
}

// 在键是变化的情况下，只能采用[]的形式
// obj[key] = 'value'
// obj.key = 'value'   // 等同于obj['key'] = 'value'   

console.log(obj);