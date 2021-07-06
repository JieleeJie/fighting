// 声明构造函数
function Promise(excutor) {

    this.promiseState = 'pending'
    this.promiseResult = null

    // 保存对象实例的this
    const that = this

    // resolve函数
    function resolve(data) {
        //1. 修改对象状态 promiseState
        that.promiseState = 'fulfilled'
        // 2. 修改对象结果值 promiseResult
        that.promiseResult = data
    }

    // reject函数
    function reject(data) {
        //1. 修改对象状态 promiseState
        that.promiseState = 'rejected'
        // 2. 修改对象结果值 promiseResult
        that.promiseResult = data
    }


    // 执行器函数是同步调用的
    excutor(resolve,reject)
}

// 添加then方法
Promise.prototype.then = function(onFulfilled,onRejected){

}