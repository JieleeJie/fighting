class Promise {

    constructor(excutor) {
        this.promiseState = 'pending'
        this.promiseResult = null
        // 保存回调函数:可以指定多个回调函数，且都会执行，所以用对象数组保存
        this.callBack = []

        // 保存对象实例的this
        const that = this

        // resolve函数
        function resolve(data) {
            // 确保状态只能由pending转为fulfilled或rejected
            if (that.promiseState !== 'pending') return
            //1. 修改对象状态 promiseState
            that.promiseState = 'fulfilled'
            //2. 修改对象结果值 promiseResult
            that.promiseResult = data
            // 执行器中是异步方法 在状态改变后才执行回调函数
            setTimeout(() => {
                that.callBack.forEach(item => item.onFulfilled(data))
            });
        }

        // reject函数
        function reject(data) {
            // 确保状态只能由pending转为fulfilled或rejected
            if (that.promiseState !== 'pending') return
            //1. 修改对象状态 promiseState
            that.promiseState = 'rejected'
            //2. 修改对象结果值 promiseResult
            that.promiseResult = data
            // 执行器中是异步方法 在状态改变后才执行回调函数
            // then中的回调函数时异步执行的
            setTimeout(() => {
                that.callBack.forEach(item => item.onRejected(data))
            });
        }

        // 除了resolve() reject()函数外，throw也能改变状态
        // throw在执行器函数里抛出异常 所以给执行器函数进行try catch
        // 执行器函数是同步执行的
        try {
            excutor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    // 添加then方法
    then = function (onFulfilled, onRejected) {
        const that = this

        // catch异常穿透的处理，当then方法中只指定了成功的回调时，自己指定一个
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason
            }
        }
        // 值传递，当then方法中没有指定回调时 ，自己指定
        if (typeof onFulfilled !== 'function') {
            onFulfilled = value => value
        }

        // then方法的返回值是一个新的promise
        return new Promise((resolve, reject) => {

            // 封装onFulfilled, onRejected回调函数及其返回结果
            // type 为 onFulfilled, onRejected
            function callBack(type) {
                // 若抛出异常
                try {
                    // 得到onFulfilled, onRejected的返回值
                    let result = type(that.promiseResult)
                    if (result instanceof Promise) {
                        // 回调函数返回值是Promise，调用then方法来改变返回的promise的状态和结果
                        result.then(v => {
                            resolve(v)
                        }, r => {
                            reject(r)
                        })
                    } else {
                        // 回调函数返回结果不是promise，则返回的promise是一个成功的promise，成功的结果为result
                        resolve(result)
                    }
                } catch (e) {
                    reject(e)
                }
            }

            // 执行器中是同步方法，先改变了状态，指定then回调时同时执行了回调
            if (this.promiseState === 'fulfilled') {
                // then中的回调函数时异步执行的
                setTimeout(() => {
                    callBack(onFulfilled)
                });
            }

            // 执行器中是同步方法，先改变了状态，指定then回调时同时执行了回调
            if (this.promiseState === 'rejected') {
                // then中的回调函数时异步执行的
                setTimeout(() => {
                    callBack(onRejected)
                });
            }

            // 执行器中是异步方法 指定then回调时的状态还是pending
            // 等异步方法执行完了，状态改变，再执行回调函数
            // 所以指定then回调时先保存回调函数，等状态改变（resolve或reject）再执行回调
            if (this.promiseState === 'pending') {
                this.callBack.push({
                    onFulfilled: function () {
                        callBack(onFulfilled)
                    },
                    onRejected: function () {
                        callBack(onRejected)
                    }
                })
            }
        })

    }

    // 添加catch 方法
    catch = function (onRejected) {
        this.then(undefined, onRejected)
    }

    // 添加resolve 方法
    static resolve = function (value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            } else {
                resolve(value)
            }
        })
    }

    // 添加reject 方法
    static reject = function (reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    // 添加all 方法
    static all = function (promises) {
        return new Promise((resolve, reject) => {
            let count = 0;
            // 所有promise返回值的数组作为成功回调的返回值，顺序跟数组的顺序保持一致；
            let resultArr = []
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    count++;
                    //将当前promise对象成功的结果 存入到数组中
                    // 为了保证顺序，不使用push（避免异步任务带来的影响）
                    resultArr[i] = v
                    // 全部成功后才执行resolve 改变状态
                    if (count === resultArr.length) {
                        resolve(resultArr)
                    }
                }, r => {
                    reject(r)
                })
            }
        })
    }

    // 添加 race 方法
    static race = function (promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                // 第一个改变状态的promise的状态和方法 即为 race方法返回的promise的状态和方法
                promises[i].then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            }
        })
    }
}

