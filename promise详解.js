//promise用法介绍
//Promise 是异步编程的一种解决方案，比传统的解决方案——--回调函数和事件——更合理和更强大。
//一般用法
// const promise = new Promise(function(resolve, reject) {
//     // ... some code
//     if ( /* 异步操作成功 */ ){
//       resolve(value);
//     } else {
//       reject(error);
//     }
//   });
// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

// promise.then(function(value) {
//   // success
// }, function(error) {
//   // failure
// });




//promise例子
function getp1() {
    var p1 = new Promise((resolve, reject) => {
         //setTimeout(resolve, 1000, 'done');
        resolve('p1 done'); //p1 done 为传的参数
    })
    p1.then(data=>{
         console.log(data); // done
    })

    return p1;  //返回一个promise对象
}

function getp2() {
    var p2 = new Promise((resolve, reject) => {
        resolve('p2 done');
    })
    
    p2.then(data => {
        console.log(data);
    })

    return p2;  //返回一个promise对象
}

//Promise.all()等待所有参数都返回的是reslove状态，才算是resolve状态；一个是reject状态，就是reject;用于处理多个回调事件
function getT(promise1, promise2) {
    var Pro = Promise.all([promise1,promise2]);

    Pro.then(data => {
        console.log(data);
    })

}


getT(getp1(), getp2());


console.log("ddd");